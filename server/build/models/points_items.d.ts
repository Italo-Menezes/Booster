import { Model, Optional } from "sequelize";
interface PointsItemsAttributes {
    id: number;
    point_id: number;
    item_id: number;
}
type PointsItemsCreationAttributes = Optional<PointsItemsAttributes, "id">;
export declare class points_items extends Model<PointsItemsAttributes, PointsItemsCreationAttributes> implements PointsItemsAttributes {
    id: number;
    point_id: number;
    item_id: number;
}
export {};
