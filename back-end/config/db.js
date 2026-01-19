const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: "localhost",
    dialect: "mysql",
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true,
    }
});

module.exports = db;
