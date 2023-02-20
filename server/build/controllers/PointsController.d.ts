import { Request, Response } from "express";
declare class PointsController {
    show(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    create(request: Request, response: Response): Promise<Response<any, Record<string, any>> | undefined>;
    index(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export default PointsController;
