import { Request, Response } from "express";
declare class ItemsController {
    index(request: Request, response: Response): Promise<void>;
}
export default ItemsController;
