import Category from "@domain/entities/Category";

export default interface ICategoriesRepository {
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | undefined>;
  save(category: Category): Promise<void>;
}
