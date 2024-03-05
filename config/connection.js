const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize("blogData_db", "root", "toor", {
  dialect: "mysql", // Replace with your preferred database dialect
  host: "localhost", // Replace with your database host
  port: 3306, // Replace with your database port
});

module.exports = sequelize;
