const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Listing extends Model {}

Listing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true, // Changed from false to true if descriptions are optional
    },
    price: {
        type: DataTypes.DECIMAL(10, 2), // Specify precision if needed
        allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // Make sure 'user' matches your user table exactly as it is in the database
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false, // Consider enabling timestamps if you want createdAt and updatedAt managed by Sequelize
    freezeTableName: true,
    underscored: true,
    modelName: 'listing', // Updated modelName to 'listing'
  }
);

module.exports = Listing;