import Category from "@domain/entities/Category";
import Price from "@domain/entities/Price";
import Product from "@domain/entities/Product";
import { CreateProductDTO } from "@domain/interfaces/dtos/CreateProductDTO";
import ICategoriesRepository from "@domain/interfaces/repositories/ICategoriesRepository";
import IPricesRepository from "@domain/interfaces/repositories/IPricesRepository";
import IProductsRepository from "@domain/interfaces/repositories/IProductsRepository";

export default class CreateProductUseCase {
  constructor(
    private priceRepository: IPricesRepository,
    private categoryRepository: ICategoriesRepository,
    private productRepository: IProductsRepository
  ) {}

  async execute(dto: CreateProductDTO): Promise<Product> {
    let category = await this.categoryRepository.findById(dto.categoryId);

    if (!category) {
      category = new Category({
        id: "123",
        depth: 1,
        name: "Default",
      });

      await this.categoryRepository.save(category);
    }

    const product = new Product({
      name: dto.name,
      category,
      prices: [],
    });

    await this.productRepository.save(product);

    const price = new Price({
      value: dto.price.value,
      expirationDate: new Date(dto.price.expiresAt),
      product,
    });

    await this.priceRepository.save(price);

    return { ...product, prices: [price] };
  }
}
