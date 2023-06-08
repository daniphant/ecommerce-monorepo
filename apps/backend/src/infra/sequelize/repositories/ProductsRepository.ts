import Product from "@domain/entities/Product";
import IProductsRepository from "@domain/interfaces/repositories/IProductsRepository";
import ProductModel from "../models/ProductModel";
import ProductMapper from "../mappers/product/ProductMapper";

export default class ProductsRepository implements IProductsRepository {
  public async findAll(): Promise<Product[]> {
    const productModels = await ProductModel.findAll({
      include: ["category", "prices"],
    });

    return productModels.map((productModel) =>
      ProductMapper.toDomain(productModel)
    );
  }

  public async findById(id: string): Promise<Product | undefined> {
    const productModel = await ProductModel.findByPk(id, {
      include: ["category", "prices"],
    });

    return productModel ? ProductMapper.toDomain(productModel) : undefined;
  }

  public async save(product: Product): Promise<void> {
    const productModel = ProductMapper.toPersistence(product);
    await productModel.save();
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
