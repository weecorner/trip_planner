const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Restaurant = dbConnection.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Restaurant;