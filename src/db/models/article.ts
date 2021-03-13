import { Sequelize, DataTypes, Model, Optional, ModelCtor } from "sequelize";

export interface ArticleAttributes{
  id?: number,
  authorId: number,
  authorName: string,
  title: string,
  description: string,
  body: string,
  categoryId: number,
  createdAt?: Date,
  updatedAt?: Date
}

export interface ArticleCreationAttributes extends Optional<ArticleAttributes,"id">{}

export interface ArticleInstance extends Model<ArticleAttributes, ArticleCreationAttributes>, ArticleAttributes {}

type ArticleModel = ModelCtor<ArticleInstance>;

export function ArticleFactory(sequelize: Sequelize): ArticleModel {
  const Article = sequelize.define<ArticleInstance>(
    "Article",
    {
      authorId: DataTypes.INTEGER,
      authorName: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      body: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    { underscored: true }
  );

  return Article;
}

