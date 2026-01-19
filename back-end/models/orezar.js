const { DataTypes } = require('sequelize');
const db = require("../config/db");

const orezarModel = db.define("orezari", 
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
    prenume: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numarCopii: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orezCules: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    },
    {
        freezeTableName: true,
    }
);
module.exports = orezarModel;