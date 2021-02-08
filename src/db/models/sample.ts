/* eslint-disable @typescript-eslint/no-empty-interface */
import { Sequelize, DataTypes, Model, Optional, ModelCtor } from "sequelize";

// This interface represents the attributes we have for each model instance, mapping
// each attribute to their TypeScript data types.
// Note that `id`, `createdAt`, and `updatedAt` is defined with an optional guard as it is
// already handled by Sequelize and so we do not need to redefine it later on the model creation.
export interface SampleAttributes {
  id?: number;
  name: string;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Some attributes are optional in `build` and `create` calls.
// One of these attributes is definitely `id`, as this will be auto-incremented
// by the database itself.
export interface SampleCreationAttributes extends Optional<SampleAttributes, "id"> {}

// This interface represents the model instance
export interface SampleInstance extends Model<SampleAttributes, SampleCreationAttributes>, SampleAttributes {}

// This type represents the model
type SampleModel = ModelCtor<SampleInstance>;

// As the Sequelize instance is not available until when the project runs, we define what is called
// a "model factory" function, which requires a Sequelize instance and defines the
// model when called.
export function SampleFactory(sequelize: Sequelize): SampleModel {
  const Sample = sequelize.define<SampleInstance>(
    // This is the model name
    "Sample",
    // This is the model definition, which maps the attributes to their
    // Sequelize data types
    {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
    },
    // This is the model options, having `underscored: true` is required
    { underscored: true }
  );

  return Sample;
}
