"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.point = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../database/sequelize");
class point extends sequelize_1.Model {
}
exports.point = point;
point.init({
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
    name: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    whatsapp: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: new sequelize_1.DataTypes.DECIMAL(10, 8),
        allowNull: false,
    },
    longitude: {
        type: new sequelize_1.DataTypes.DECIMAL(10, 8),
        allowNull: false,
    },
    city: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    uf: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "points",
    sequelize: sequelize_2.sequelize,
    timestamps: false,
});
