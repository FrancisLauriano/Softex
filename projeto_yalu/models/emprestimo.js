const Sequelize = require('sequelize');
const database = require('../db');
const Adm = require('./adm');
const Aluno = require('./aluno');
const Instrumento = require('./instrumento');

const Emprestimo = database.define('emprestimo', {
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
    evento: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Emprestimo.belongsTo(Aluno, {
    constraints: true,
    foreignKey: 'idAluno'
});

Emprestimo.belongsTo(Instrumento, {
    constraints: true,
    foreignKey: 'idInstrumento'
});

module.exports = Emprestimo;
