import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

export class MyList extends Model<
  InferAttributes<MyList>,
  InferCreationAttributes<MyList>
> {
  declare id: CreationOptional<number>;
  declare movieId: number;

}

export const initMyListModel = async (sequelize: Sequelize) => {
  MyList.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      movieId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      tableName: "myList",
      sequelize, // Instance of sequelize that reflects the connection
    }
  );

  await MyList.sync();
};
