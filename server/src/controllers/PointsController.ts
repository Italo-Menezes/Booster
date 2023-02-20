import { Request, Response } from "express";
import { sequelize } from "../database/sequelize";
import { points_items, item, point } from "../models/index";

class PointsController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const Point = await point.findByPk(id);

      if (!Point) {
        return response.status(400).json({ message: "Point not found" });
      }

      /* trazer tudo referente ao id e que venha so o title  */
      const items = await points_items.findAll({
        where: { point_id: id },
        include: [
          {
            model: item,
            as: "item",
            attributes: ["title"],
          },
        ],
      });

      const serializedItems = items.map((item: any) => {
        return {
          id: item.item.id,
          title: item.item.title,
        };
      });

      return response.status(200).json({ Point, serializedItems });
    } catch (error) {
      return response.status(400).json(console.log(error));
    }
  }

  async create(request: Request, response: Response) {
    const { name, email, whatsapp, latitude, longitude, city, uf, items } =
      request.body;

    if (
      !name ||
      !email ||
      !whatsapp ||
      !latitude ||
      !longitude ||
      !city ||
      !uf ||
      !items
    ) {
      return response.status(400).json({ message: "Missing body parameters" });
    }


/* verificar se exister no banco de dadoss item*/
 


    const trx = await sequelize.transaction();

    const Point = await point.create(
      {
        image: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
      },
      { transaction: trx }
    );

    const point_id = Point.id;

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await points_items.bulkCreate(pointItems, { transaction: trx });

    const variable = await point.findAll();
    await trx.commit();

    response.status(201).json({ variable });
  }

  async index(request: Request, response: Response) {
    try {
      const { city, uf, items } = request.query;
      

      const parsedItems = String(items)
        .split(",")
        .map((item) => Number(item.trim()));

      const Points = await point.findAll({
        include: [
          {
            model: points_items,
            as: "points_items",
            where: { item_id: parsedItems },
          },
        ],
      });

      
      const serializedPoints = Points.map((Point) => {
        return {
          id: Point.id,
          name: Point.name,
          image: Point.image,
          email: Point.email,
          whatsapp: Point.whatsapp,
          latitude: Point.latitude,
          longitude: Point.longitude,
          city: Point.city,
          uf: Point.uf,
        };
      });

      return response.status(200).json(serializedPoints);


    } catch (error) {
      return response.status(400).json(console.log(error));
    }
  }
}

export default PointsController;
