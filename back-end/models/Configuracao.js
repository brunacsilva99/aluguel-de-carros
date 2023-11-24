'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Configuracao extends Model {}

  Configuracao.init(
    {
      chave: DataTypes.STRING,
      valor: DataTypes.STRING,
      descricao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Configuracao',
    }
  );

  return Configuracao;
};
