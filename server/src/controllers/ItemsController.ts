import { Request, Response } from "express";
import { item } from "../models/items";


class ItemsController {
    async index(request: Request, response: Response) {
        await item.findAll().then((items) => {
            const serializedItems = items.map((item) => {
              return {
                id: item.id,
                title: item.title,
                image_url: `https://server-elixo.herokuapp.com/uploads/${item.image}`,
              };
            });
        
        return response.status(200).json(serializedItems);    
        });
    }
}


export default ItemsController;