'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Veiculo);
      Usuario.hasMany(models.Aluguel);
    }
  }

  Usuario.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      endereco: DataTypes.STRING,
      cpf: DataTypes.STRING,
      tipoUsuario: DataTypes.ENUM('admin', 'cliente', 'proprietario'),
    },
    {
      sequelize,
      modelName: 'Usuario',
    }
  );

  return Usuario;
};
