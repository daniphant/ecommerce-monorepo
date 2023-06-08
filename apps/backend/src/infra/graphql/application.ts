import { createApplication } from "graphql-modules";
import ProductModule from "./modules/product/ProductModule";

// This is your application, it contains your GraphQL schema and the implementation of it.
const application = createApplication({
  modules: [ProductModule],
});

export default application;
