import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from 'sequelize';

export type Role =
  | 'customer'
  | 'admin';

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare categoryListId: number;
  declare myListId: number;
}

export const initUserModel = async (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryListId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      myListId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      }
    },
    {
      tableName: 'user',
      sequelize,
    }
  );
  await User.sync();
};
