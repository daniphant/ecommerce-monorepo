import Product from "@domain/entities/Product";

export default interface IProductsRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  save(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
