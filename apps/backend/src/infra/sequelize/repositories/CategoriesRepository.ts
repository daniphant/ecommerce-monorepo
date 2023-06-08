import Category from "@domain/entities/Category";
import ICategoriesRepository from "@domain/interfaces/repositories/ICategoriesRepository";
import CategoryModel from "../models/CategoryModel";
import CategoryMapper from "../mappers/product/CategoryMapper";

export default class CategoriesRepository implements ICategoriesRepository {
  public async findAll(): Promise<Category[]> {
    const categories = await CategoryModel.findAll();

    return categories.map((category) => CategoryMapper.toDomain(category));
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await CategoryModel.findByPk(id);

    return category ? CategoryMapper.toDomain(category) : undefined;
  }

  public async save(category: Category): Promise<void> {
    const categoryModel = CategoryMapper.toPersistence(category);

    await categoryModel.save();
  }
}
