const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Decor extends Model {}

Decor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    home_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'home',
          key: 'id',
        },
      },
    date_saved: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'decor',
  }
);

module.exports = Decor;