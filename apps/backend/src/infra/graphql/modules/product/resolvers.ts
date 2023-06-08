import GetProductsListUseCase from "@domain/useCases/products/GetProductsListUseCase";
import CreateProductUseCase from "@domain/useCases/products/CreateProductUseCase";
import ProductsRepository from "@infra/sequelize/repositories/ProductsRepository";
import CategoriesRepository from "@infra/sequelize/repositories/CategoriesRepository";
import PricesRepository from "@infra/sequelize/repositories/PricesRepository";
import { CreateProductDTO } from "@domain/interfaces/dtos/CreateProductDTO";
import { ProductModule } from "./generated-types/module-types";

const productsRepository = new ProductsRepository();
const pricesRepository = new PricesRepository();
const categoriesRepository = new CategoriesRepository();

const getProductsListUseCase = new GetProductsListUseCase(productsRepository);
const createProductUseCase = new CreateProductUseCase(
  pricesRepository,
  categoriesRepository,
  productsRepository
);

const resolvers: ProductModule.Resolvers = {
  Query: {
    getAllProducts: async () => {
      const products = await getProductsListUseCase.execute();

      return products.map((product) => ({
        ...product,
        prices: product.prices.map((price) => ({
          ...price,
          expirationDate: price.expirationDate.toISOString(),
        })),
      }));
    },
    getProduct: async (_, { id }) => {
      const product = await productsRepository.findById(`${id}`);

      if (!product) {
        throw new Error("Product not found");
      }

      return {
        ...product,
        prices: product.prices.map((price) => ({
          ...price,
          expirationDate: price.expirationDate.toISOString(),
        })),
      };
    },
  },
  Mutation: {
    CreateProduct: async (_, { input }) => {
      const createProductDTO: CreateProductDTO = {
        name: input.name,
        price: input.price,
        categoryId: `${input.category.id}`,
      };

      const product = await createProductUseCase.execute(createProductDTO);

      return {
        ...product,
        prices: product.prices.map((price) => ({
          ...price,
          expirationDate: price.expirationDate.toISOString(),
        })),
      };
    },
  },
};

export default resolvers;
