const { Sequelize } = require("sequelize");


const connection = new Sequelize('crudNode', 'obed', '15170', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = connection