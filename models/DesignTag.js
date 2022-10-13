const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DesignTag extends Model {}

DesignTag.init(
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
      allowNull: false,
      references: {
        model: 'decor',
        key: 'id',
      },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'design_tag',
  }
);

module.exports = DesignTag;