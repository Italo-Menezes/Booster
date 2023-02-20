import express from "express";
import { sequelize } from "./database/sequelize";
import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(cors());

const port = process.env.PORT || 3333;

import path from "path";

/* config */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

/* rotas */
app.use(routes);

app.listen(port, () => {
  /* verificar se está conectado com o banco */
  sequelize
    .authenticate()
    .then(() => {
      console.log("Conectado com sucesso");
    })
    .catch((err) => {
      console.log("Erro ao se conectar: " + err);
    });

  console.log(`Example app listening at http://localhost:${port}`);
});
