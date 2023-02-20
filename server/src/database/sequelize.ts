

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ( {
  username: "root",
  password: '',
  database: "booster",
  host: "localhost",
  dialect: "mysql",
  define: {
    underscored: true
  }
});



/* veficar se o banco está conectado com  */
