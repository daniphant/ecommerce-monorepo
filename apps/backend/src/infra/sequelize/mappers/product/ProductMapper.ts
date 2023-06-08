import Product from "@domain/entities/Product";
import IMapper from "@domain/interfaces/external/IMapper";
import PriceMapper from "./PriceMapper";
import CategoryMapper from "./CategoryMapper";
import ProductModel from "@infra/sequelize/models/ProductModel";

export default class ProductMapper {
  static toDomain(data: ProductModel): Product {
    return new Product({
      id: data.id,
      name: data.name,
      category: CategoryMapper.toDomain(data.category),
      prices: data.prices.map((price) => PriceMapper.toDomain(price)),
    });
  }

  static toPersistence(data: Product): ProductModel {
    return new ProductModel({
      id: data.id,
      name: data.name,
      category: CategoryMapper.toPersistence(data.category),
      categoryId: data.category.id,
      prices: data.prices.map((price) => PriceMapper.toPersistence(price)),
    });
  }
}

// Type assertion
const _check: IMapper<Product, ProductModel> = ProductMapper;
