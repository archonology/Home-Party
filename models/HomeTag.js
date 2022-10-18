const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HomeTag extends Model {}

HomeTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    home_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'home',
        key: 'id',
      },
    },
    decor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "decor",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'home_tag',
  }
);

module.exports = HomeTag;