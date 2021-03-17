/* eslint-disable @typescript-eslint/no-empty-interface */
import { Sequelize, DataTypes, Model, Optional, ModelCtor } from "sequelize";

export interface CategoryAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id"> {}

export interface CategoryInstance
  extends Model<CategoryAttributes, CategoryCreationAttributes>,
    CategoryAttributes {}

type CategoryModel = ModelCtor<CategoryInstance>;

export function CategoryFactory(sequelize: Sequelize): CategoryModel {
  const Category = sequelize.define<CategoryInstance>(
    "Category",
    {
      name: DataTypes.STRING,
    },
    { underscored: true }
  );

  return Category;
}
