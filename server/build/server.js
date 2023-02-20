"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("./database/sequelize");
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3333;
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
/* config */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/uploads", express_1.default.static(path_1.default.resolve(__dirname, "..", "uploads")));
/* rotas */
app.use(routes_1.default);
app.listen(port, () => {
    /* verificar se está conectado com o banco */
    sequelize_1.sequelize
        .authenticate()
        .then(() => {
        console.log("Conectado com sucesso");
    })
        .catch((err) => {
        console.log("Erro ao se conectar: " + err);
    });
    console.log(`Example app listening at http://localhost:${port}`);
});
