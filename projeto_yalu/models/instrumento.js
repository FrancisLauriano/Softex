const Sequelize = require('sequelize');
const database = require('../db');
const Manutencao = require('./manutencao');

const Instrumento = database.define('instrumento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipoInstrumento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataAquisisao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    disponibilidadeUso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    localizacao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const associate = (models) => {
    Instrumento.belongsTo(models.Manutencao, {
        constraints: true,
        foreignKey: 'manutencaoId',
    });
};

module.exports = { Instrumento, associate };
