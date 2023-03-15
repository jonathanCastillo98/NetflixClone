import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

export class Accessor extends Model<
  InferAttributes<Accessor>,
  InferCreationAttributes<Accessor>
> {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare userId: number;
  declare roleId: CreationOptional<number>;
  declare isDeleted: CreationOptional<boolean>;
}

export const initAccessorModel = async (sequelize: Sequelize) => {
  Accessor.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.NUMBER,
        defaultValue: 1,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      tableName: "accessor",
      sequelize, // Instance of sequelize that reflects the connection
    }
  );

  await Accessor.sync();
};
