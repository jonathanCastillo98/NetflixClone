import { Sequelize } from 'sequelize';
import { initAccessorModel } from '../Accessor.model';
import { initCategoryModel } from '../Category.model';
import { initCategoryListModel } from '../CategoryList.model';
import { initMovieModel } from '../Movie.model';
import { initMyListModel } from '../MyList.model';
import { initRoleModel } from '../Role.model';
import { initUserModel } from '../User.model';

export let sequelize: Sequelize;
const models = [
  initAccessorModel,
  initCategoryModel,
  initCategoryListModel,
  initMovieModel,
  initMyListModel,
  initRoleModel,
  initUserModel
];

export const startSequelize = (
  db_name: string,
  db_password: string,
  db_hostname: string,
  db_username: string,
  db_port: number
) => {
  sequelize = new Sequelize(db_name, db_username, db_password, {
    dialect: 'postgres',
    host: db_hostname,
    port: db_port
  });

  for (const initModel of models) {
    initModel(sequelize);
  }

  return sequelize;
};
