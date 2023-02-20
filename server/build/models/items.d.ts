import { Model, Optional } from "sequelize";
interface ItemAttributes {
    id: number;
    image: string;
    title: string;
}
type ItemCreationAttributes = Optional<ItemAttributes, "id">;
export declare class item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes {
    id: number;
    image: string;
    title: string;
}
export {};
