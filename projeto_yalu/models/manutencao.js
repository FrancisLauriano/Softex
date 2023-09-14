const Sequelize = require('sequelize');
const database = require('../db');
const Instrumento = require('./models/instrumento');

const Manutencao = database.define('manutencao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
		},
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    descricao: {
			type: Sequelize.STRING,
			allowNull: false
    }
});

Manutencao.belongsTo(Instrumento,{
	constraint: true,
  foreignKey: 'idInstrumento'
});

module.exports = Manutencao;
