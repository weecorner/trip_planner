const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Place = dbConnection.define('place', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Place;