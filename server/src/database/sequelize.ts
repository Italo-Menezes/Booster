import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();


export const sequelize = new Sequelize ( {
  username: "admin",
  password: process.env.SENHA_BANCO_DE_DADOS,
  database: "booster",
  host: process.env.CONECTAR_BANCO_DE_DADOS,
  dialect: "mysql",
  define: {
    underscored: true
  }
});



