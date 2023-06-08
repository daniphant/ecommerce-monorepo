import { Sequelize } from "sequelize-typescript";
import CategoryModel from "./models/CategoryModel";
import ProductModel from "./models/ProductModel";
import PriceModel from "./models/PriceModel";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sql",
});

// Initialize models
sequelize.addModels([
  // Add models here
  CategoryModel,
  PriceModel,
  ProductModel,
]);

export default sequelize;
