import { Sequelize, DataTypes, Model, Optional, ModelCtor } from "sequelize";

interface SampleAttributes {
  id?: number;
  name: string;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SampleCreationAttributes extends Optional<SampleAttributes, "id"> {}

export interface SampleInstance extends Model<SampleAttributes, SampleCreationAttributes>, SampleAttributes {}

export function SampleFactory(sequelize: Sequelize): ModelCtor<SampleInstance> {
  const Sample = sequelize.define<SampleInstance>(
    "Sample",
    {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
    },
    { underscored: true }
  );

  return Sample;
}
