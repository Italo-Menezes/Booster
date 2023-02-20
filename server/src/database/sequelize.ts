import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();


export const sequelize = new Sequelize ( {
  username: "admin",
  password: 'italosma',
  database: "booster",
  host:'web.cin8xcnaucfb.sa-east-1.rds.amazonaws.com',
  dialect: "mysql",
  define: {
    underscored: true
  }
});



