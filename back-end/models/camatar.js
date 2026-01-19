const { DataTypes } = require('sequelize');
const db = require("../config/db");

const camatarModel = db.define("camatari", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    porecla: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    diametruBrat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    valuta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        freezeTableName: true,
    }
);
module.exports = camatarModel;