const Sequelize = require('sequelize');
const database = require('../db');

const Aluno = database.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
			type: Sequelize.INTEGER,
			allowNull: false
    },
		email: {
			type: Sequelize.STRING,
			allowNull: false
    },
    turma: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
});

module.exports = Aluno;
