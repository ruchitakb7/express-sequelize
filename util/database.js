const Sequelize = require('sequelize');

const sequelize = new Sequelize('express-js', 'root', 'ruchita123@', {
    dialect: 'mysql',
    host: 'localhost'
  });
  
  module.exports = sequelize;