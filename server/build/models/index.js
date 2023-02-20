"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.points_items = exports.point = exports.item = void 0;
const items_1 = require("./items");
Object.defineProperty(exports, "item", { enumerable: true, get: function () { return items_1.item; } });
const points_1 = require("./points");
Object.defineProperty(exports, "point", { enumerable: true, get: function () { return points_1.point; } });
const points_items_1 = require("./points_items");
Object.defineProperty(exports, "points_items", { enumerable: true, get: function () { return points_items_1.points_items; } });
items_1.item.hasMany(points_items_1.points_items, { foreignKey: 'item_id' });
points_items_1.points_items.belongsTo(items_1.item, { foreignKey: 'item_id' });
points_1.point.hasMany(points_items_1.points_items, { foreignKey: 'point_id' });
points_items_1.points_items.belongsTo(points_1.point, { foreignKey: 'point_id' });