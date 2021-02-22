import { Sequelize, DataTypes, Model, Optional, ModelCtor } from "sequelize";

export interface UserAttributes {
  id?: number;
  uid: string;
  username: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

type UserModel = ModelCtor<UserInstance>;

export function UserFactory(sequelize: Sequelize): UserModel {
  const User = sequelize.define<UserInstance>(  
    "users",
    {
      uid: DataTypes.STRING,
      username: DataTypes.STRING,
    },
    { underscored: true }
  );
  return User;
}
