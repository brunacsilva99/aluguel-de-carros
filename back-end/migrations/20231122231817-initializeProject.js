'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Tabela Usuarios
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      tipoUsuario: {
        type: Sequelize.ENUM('admin', 'cliente', 'proprietario'),
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      atualizadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Tabela Veiculos
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      placa: {
        type: Sequelize.STRING,
      },
      chassi: {
        type: Sequelize.STRING,
      },
      renavam: {
        type: Sequelize.STRING,
      },
      modelo: {
        type: Sequelize.STRING,
      },
      marca: {
        type: Sequelize.STRING,
      },
      ano: {
        type: Sequelize.STRING,
      },
      ultimaManutencao: {
        type: Sequelize.DATE,
      },
      valorDiariaAluguel: {
        type: Sequelize.DOUBLE,
      },
      kmRodados: {
        type: Sequelize.DOUBLE,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      atualizadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Tabela Alugueis
    await queryInterface.createTable('Alugueis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dataRetirada: {
        type: Sequelize.DATE,
      },
      dataDevolucao: {
        type: Sequelize.DATE,
      },
      valorTotal: {
        type: Sequelize.DOUBLE,
      },
      status: {
        type: Sequelize.ENUM('em reserva', 'confirmado', 'retirado', 'devolvido', 'cancelado'),
      },
      localRetirada: {
        type: Sequelize.STRING,
      },
      localDevolucao: {
        type: Sequelize.STRING,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      veiculoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Veiculos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      atualizadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Tabela Configuracoes
    await queryInterface.createTable('Configuracoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      chave: {
        type: Sequelize.STRING,
      },
      valor: {
        type: Sequelize.STRING,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      atualizadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Desfazer as alterações na ordem inversa
    await queryInterface.dropTable('Configuracoes');
    await queryInterface.dropTable('Alugueis');
    await queryInterface.dropTable('Veiculos');
    await queryInterface.dropTable('Usuarios');
  },
};
