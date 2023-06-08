import GetProductsListUseCase from "@domain/useCases/products/GetProductsListUseCase";
import CreateProductUseCase from "@domain/useCases/products/CreateProductUseCase";
import ProductsRepository from "@infra/sequelize/repositories/ProductsRepository";
import { Resolvers } from "graphql-modules";
import CategoriesRepository from "@infra/sequelize/repositories/CategoriesRepository";
import PricesRepository from "@infra/sequelize/repositories/PricesRepository";
import { CreateProductDTO } from "@domain/interfaces/dtos/CreateProductDTO";

const productsRepository = new ProductsRepository();
const pricesRepository = new PricesRepository();
const categoriesRepository = new CategoriesRepository();

const getProductsListUseCase = new GetProductsListUseCase(productsRepository);
const createProductUseCase = new CreateProductUseCase(
  pricesRepository,
  categoriesRepository,
  productsRepository
);

const resolvers: Resolvers = {
  Query: {
    getAllProducts: async () => {
      const products = await getProductsListUseCase.execute();
      return products;
    },
    getProduct: async (_, args) => {
      const products = await getProductsListUseCase.execute();
      return products.find((product) => product.id === args.id);
    },
  },
  Mutation: {
    CreateProduct: async (_, args) => {
      const { name, category, price } = args.input;
      const dto = new CreateProductDTO({
        categoryId: category.id,
        name,
        price,
      });

      const product = await createProductUseCase.execute(dto);

      return product;
    },
  },
};

export default resolvers;
