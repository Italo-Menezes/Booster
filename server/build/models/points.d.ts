import { Model, Optional } from "sequelize";
interface PointAttributes {
    id: number;
    image: string;
    name: string;
    email: string;
    whatsapp: string;
    latitude: number;
    longitude: number;
    city: string;
    uf: string;
}
type PointCreationAttributes = Optional<PointAttributes, "id">;
export declare class point extends Model<PointAttributes, PointCreationAttributes> implements PointAttributes {
    id: number;
    image: string;
    name: string;
    email: string;
    whatsapp: string;
    latitude: number;
    longitude: number;
    city: string;
    uf: string;
}
export {};
