const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement:true

  },
  title:
  {
    type: Sequelize.STRING,
    allowNull:false
  },
  imageUrl:
  {
    type: Sequelize.STRING,
    allowNull:false
  },
  description:
  {
    type: Sequelize.STRING,
    allowNull:false
  },
  price:{
    type: Sequelize.INTEGER,
    allowNull:false
  }

});

module.exports=Product;