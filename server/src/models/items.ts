import { Model, Optional, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/sequelize";

interface ItemAttributes {
  id: number;
  image: string;
  title: string;
}
type ItemCreationAttributes = Optional<ItemAttributes, "id">;

export class item
  extends Model<ItemAttributes, ItemCreationAttributes>
  implements ItemAttributes
{
  public id!: number;
  public image!: string;
  public title!: string;
}

item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    image: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "items",
    sequelize,
    timestamps: false,
  }
);
