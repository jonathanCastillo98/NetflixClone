import { Router } from "express";
import controllers from "../controllers/index";

const restaurantRouter = Router();
const controller = controllers.restaurantcontroller;
/*TODO: MIDDLEWARES*/
restaurantRouter.get("/:id", controller.getRestaurantById);
restaurantRouter.get("/owner/:ownerId", controller.getRestaurantbyOwnerId);
restaurantRouter.get("/all/:ownerId", controller.getAllRestaurantsbyOwnerId);
restaurantRouter.post("/new", controller.createRestaurant);
restaurantRouter.delete("/:id", controller.deleteRestaurantById);
restaurantRouter.put("/activate/:id", controller.activateRestaurantById);
restaurantRouter.put("/:id", controller.updateRestaurantById);
restaurantRouter.put("/wo/:id", controller.updateRestaurantByIdWithoutOwner);
restaurantRouter.get("/hours/:restaurantId", controller.getRestaurantHoursByid);


export default restaurantRouter;
