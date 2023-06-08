import Category from "@domain/entities/Category";
import CategoryModel from "@infra/sequelize/models/CategoryModel";

export default class CategoryMapper {
  static toDomain(data: CategoryModel): Category {
    return new Category({
      id: data.id,
      depth: data.depth,
      name: data.name,
      fatherCategory: data.fatherCategory
        ? CategoryMapper.toDomain(data.fatherCategory)
        : undefined,
    });
  }

  static toPersistence(data: Category): CategoryModel {
    return new CategoryModel({
      id: data.id,
      depth: data.depth,
      name: data.name,
      fatherCategory: data.fatherCategory,
    });
  }
}
