import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

export class CategoryList extends Model<
  InferAttributes<CategoryList>,
  InferCreationAttributes<CategoryList>
> {
  declare id: CreationOptional<number>;
  declare movieId: number;

}

export const initCategoryListModel = async (sequelize: Sequelize) => {
  CategoryList.init(
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
      tableName: "categoryList",
      sequelize, // Instance of sequelize that reflects the connection
    }
  );

  await CategoryList.sync();
};
