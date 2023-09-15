const Sequelize = require('sequelize');
const database = require('../db');
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

const associate = (models) => {
    Emprestimo.belongsTo(models.Aluno, {
        foreignKey: 'alunoId',
        allowNull: false
    });

    Emprestimo.belongsTo(models.Instrumento, {
        foreignKey: 'instrumentoId',
        allowNull: false
    });
};

module.exports = { Emprestimo, associate };
