"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize({
    username: "admin",
    password: process.env.SENHA_BANCO_DE_DADOS,
    database: "booster",
    host: process.env.CONECTAR_BANCO_DE_DADOS,
    dialect: "mysql",
    define: {
        underscored: true
    }
});
