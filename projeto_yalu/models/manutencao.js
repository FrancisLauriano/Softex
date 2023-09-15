const Sequelize = require('sequelize');
const database = require('../db');
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

const associate = (models) => {
    Manutencao.belongsTo(models.Instrumento, {
        constraints: true,
        foreignKey: 'instrumentoId',
        allowNull: false
    });
};

module.exports = { Manutencao, associate };
