import { Model, Optional, DataTypes, Sequelize, Association } from "sequelize";
import { sequelize } from "../database/sequelize";

interface PointsItemsAttributes {
  id: number;
  point_id: number;
  item_id: number;
}

type PointsItemsCreationAttributes = Optional<PointsItemsAttributes, "id">;

export class points_items extends Model<PointsItemsAttributes, PointsItemsCreationAttributes> implements PointsItemsAttributes {
  public id!: number;
  public point_id!: number;
  public item_id!: number;
}

points_items.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    point_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "points_items",
    sequelize,
    timestamps: false,
  }

);
