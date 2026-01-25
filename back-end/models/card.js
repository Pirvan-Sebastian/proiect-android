const { DataTypes } = require('sequelize');
const db = require("../config/db");

const cardModel = db.define("cards", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nume: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    },
    {
        freezeTableName: true,
    }
);
module.exports = cardModel;