const Sequelize = require('sequelize');
const database = require('../db');
const Adm = require('./adm');
const Aluno = require('./aluno');
const Instrumento = require('./instrumento');


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

Manutencao.belongsTo(Instrumento, {
    constraints: true,
    foreignKey: 'idInstrumento'
});

module.exports = Manutencao;
