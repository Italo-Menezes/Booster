"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("../models/items");
class ItemsController {
    async index(request, response) {
        await items_1.item.findAll().then((items) => {
            const serializedItems = items.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    image_url: `http://localhost:3333/uploads/${item.image}`,
                };
            });
            return response.status(200).json(serializedItems);
        });
    }
}
exports.default = ItemsController;
