"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.points_items = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../database/sequelize");
class points_items extends sequelize_1.Model {
}
exports.points_items = points_items;
points_items.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    point_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    item_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "points_items",
    sequelize: sequelize_2.sequelize,
    timestamps: false,
});
