'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    static associate(models) {
      Veiculo.belongsTo(models.Usuario);
      Veiculo.hasMany(models.Aluguel);
    }
  }

  Veiculo.init(
    {
      placa: DataTypes.STRING,
      chassi: DataTypes.STRING,
      renavam: DataTypes.STRING,
      modelo: DataTypes.STRING,
      marca: DataTypes.STRING,
      ano: DataTypes.STRING,
      ultimaManutencao: DataTypes.DATE,
      valorDiariaAluguel: DataTypes.DOUBLE,
      kmRodados: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: 'Veiculo',
    }
  );

  return Veiculo;
};
