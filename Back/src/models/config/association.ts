import { Accessor } from "../Accessor.model";
import { Category } from "../Category.model";
import { CategoryList } from "../CategoryList.model";
import { MyList } from "../MyList.model";
import { Movie } from "../Movie.model";
import { Role } from "../User.model";
import { User } from "../User.model";

//Associations:
export const initAssociation = () => {

  //------------------------ A C C E S S O R S --------------------------------
  Accessor.hasMany(User, {
    foreignKey: 'id',
  })

  Accessor.hasOne(Role, {
    foreignKey: 'id'
  })


  //------------------------ U S E R --------------------------------
  User.belongsTo(Accessor, {
    foreignKey: 'id',
  });

  User.hasMany(CategoryList, {
    foreignKey: 'id',
  })

  User.hasOne(MyList, {
    foreignKey: 'id',
  })


  //------------------------ CATEGORY LIST --------------------------------

  CategoryList.hasMany(Movie, {
    foreignKey: 'id'
  })

  CategoryList.belongsToMany(User, {
    foreignKey: 'id'
  })


  //------------------------ MY LIST --------------------------------
  MyList.belongsTo(User, {
    foreignKey: 'id'
  })

  MyList.hasMany(Movie, {
    foreignKey: 'id'
  })

  //------------------------ MOVIE --------------------------------
  Movie.hasOne(Category, {
    foreignKey: 'id'
  })

  Movie.belongsToMany(CategoryList, {
    foreignKey: 'id'
  })

  Movie.belongsToMany(MyList, {
    foreignKey: 'id'
  })



  //------------------------ CATEGORY --------------------------------
  Category.belongsToMany(Movie, {
    foreignKey: 'id'
  })


  //------------------------ ROLE --------------------------------
  Role.belongsToMany(Accessor, {
    foreignKey: 'id'
  })
}



