import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

export class Movie extends Model<
  InferAttributes<Movie>,
  InferCreationAttributes<Movie>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare categoryId: number;
  declare isDeleted: CreationOptional<boolean>;
}

export const initMovieModel = async (sequelize: Sequelize) => {
  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: DataTypes.NUMBER,
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }

    },
    {
      tableName: "movie",
      sequelize, // Instance of sequelize that reflects the connection
    }
  );

  await Movie.sync();
};
