import Product from "@domain/entities/Product";
import IProductsRepository from "@domain/interfaces/repositories/IProductsRepository";

export default class GetProductsListUseCase {
  constructor(private readonly productsRepository: IProductsRepository) {}

  async execute(): Promise<Product[]> {
    return this.productsRepository.findAll();
  }
}
