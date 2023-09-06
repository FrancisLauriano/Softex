const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_crud', 'root', 'Fr@n-1315', {
	dialect: 'mysql',
	host: 'localhost',
	port: 3306
});

module.exports = sequelize;

