import { Accessor } from "../Accessor.model";
import { Category } from "../Category.model";
import { CategoryList } from "../CategoryList.model";
import { MyList } from "../MyList.model";
import { Movie } from "../Movie.model";
import { Role } from "../User.model";
import { User } from "../User.model";

//Associations:
//------------------------ U S E R --------------------------------

export const initAssociation = () => {
  User.hasOne(Owner, {
    foreignKey: 'user_id',
  });

  User.hasOne(Customer, {
    foreignKey: 'user_id',
  });

  User.hasOne(Courier, {
    foreignKey: 'user_id',
  });

  //------------------------ O W N E R --------------------------------

  Owner.hasMany(Restaurant, {
    foreignKey: 'owner_id',
  });

  //------------------------ M A N A G E R --------------------------------

  Manager.hasOne(User, {
    foreignKey: 'user_id',
  });

  //------------------------ R E S T A U R A N T S -------------------------------

  Restaurant.hasOne(Manager, {
    foreignKey: 'restaurant_id',
  });

  Restaurant.hasMany(OpeningDays, {
    foreignKey: 'restaurant_id',
  });

  //------------------------ C L I E N T --------------------------------

  Order.belongsTo(Customer, {
    foreignKey: 'client_id',
  });

  Customer.hasOne(ClientAddress, {
    foreignKey: 'client_id',
  });

  Customer.hasOne(BillingDetails, {
    foreignKey: 'client_id',
  });

  //------------------------ BILLING DETAILS --------------------------------

  BillingDetails.belongsTo(PaymentMethod, {
    foreignKey: 'payment_id',
  });

  //------------------------ PAYMENT METHODS --------------------------------

  PaymentMethod.belongsTo(Sale, {
    foreignKey: 'order_status_id',
  });

  //------------------------ O R D E R --------------------------------

  Order.hasOne(Sale, {
    foreignKey: 'order_id',
  });

  Order.belongsTo(Courier, {
    as: 'courier',
    foreignKey: 'courier_id',
  });

  Order.hasOne(OrderStatus, {
    as: 'order_status',
    foreignKey: 'id',
  });

  /* Order.belongsTo(OrderStatus,{
    foreignKey:'order_status_id',
    }) */

  /* OrderStatus.belongsTo(Order,{
    foreignKey:'order_status_id',
    });
 */

  Order.hasMany(OrderItems, {
    as: 'items',
    foreignKey: 'order_id',
  });

  Order.belongsTo(Restaurant, {
    as: 'restaurant',
    foreignKey: 'restaurant_id',
  });

  //------------------------ ORDER ITEM --------------------------------

  OrderItems.belongsTo(Item, {
    foreignKey: 'item_id',
  });

  //------------------------ I T E M --------------------------------

  Item.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
  });

  //------------------------ C I T Y --------------------------------

  City.hasOne(Restaurant, {
    foreignKey: 'city_id',
  });

  City.hasOne(ClientAddress, {
    foreignKey: 'city_id',
  });

  City.hasOne(Sale, {
    foreignKey: 'city_id',
  });
};
