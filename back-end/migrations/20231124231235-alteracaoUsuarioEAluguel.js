'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Adicionar colunas à tabela 'Usuarios'
    await queryInterface.addColumn('Usuarios', 'cnh', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Usuarios', 'tipoCnh', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Usuarios', 'senha', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Usuarios', 'ativado', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });


    // Adicionar coluna à tabela 'Alugueis'
    await queryInterface.addColumn('Alugueis', 'comentario', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remover coluna da tabela 'Usuarios'
    await queryInterface.removeColumn('Usuarios', 'cnh');
    await queryInterface.removeColumn('Usuarios', 'tipoCnh');
    await queryInterface.removeColumn('Usuarios', 'senha');
    await queryInterface.removeColumn('Usuarios', 'ativado');

    // Remover coluna da tabela 'Alugueis'
    await queryInterface.removeColumn('Alugueis', 'comentario');
  }
};
