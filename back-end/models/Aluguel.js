'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluguel extends Model {
    static associate(models) {
      Aluguel.belongsTo(models.Usuario);
      Aluguel.belongsTo(models.Veiculo);
    }
  }

  Aluguel.init(
    {
      dataRetirada: DataTypes.DATE,
      dataDevolucao: DataTypes.DATE,
      valorTotal: DataTypes.DOUBLE,
      status: DataTypes.ENUM('em reserva', 'confirmado', 'retirado', 'devolvido', 'cancelado'),
      localRetirada: DataTypes.STRING,
      localDevolucao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Aluguel',
    }
  );

  return Aluguel;
};