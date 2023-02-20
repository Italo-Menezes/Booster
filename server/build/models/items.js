"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.item = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../database/sequelize");
class item extends sequelize_1.Model {
}
exports.item = item;
item.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    image: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "items",
    sequelize: sequelize_2.sequelize,
    timestamps: false,
});
