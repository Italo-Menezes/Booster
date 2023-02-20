import { Model, Optional, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/sequelize";

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

export class point extends Model<PointAttributes, PointCreationAttributes> implements PointAttributes {
  public id!: number;
  public image!: string;
  public name!: string;
  public email!: string;
  public whatsapp!: string;
  public latitude!: number;
  public longitude!: number;
  public city!: string;
  public uf!: string;
}


 


point.init(
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
    name: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    whatsapp: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: new DataTypes.DECIMAL(10, 8),
      allowNull: false,
    },
    longitude: {
      type: new DataTypes.DECIMAL(10, 8),
      allowNull: false,
    },
    city: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    uf: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "points",
    sequelize,
    timestamps: false,
  },
  

);