import Price from "@domain/entities/Price";
import IMapper from "@domain/interfaces/external/IMapper";
import PriceModel from "@infra/sequelize/models/PriceModel";
import ProductMapper from "./ProductMapper";

export default class PriceMapper {
  static toDomain(data: PriceModel): Price {
    return new Price({
      id: data.id,
      value: data.value,
      expirationDate: data.expiresAt,
      product: data.product && ProductMapper.toDomain(data.product),
    });
  }

  static toPersistence(data: Price): PriceModel {
    return new PriceModel({
      id: data.id,
      value: data.value,
      expiresAt: data.expirationDate,
      product: ProductMapper.toPersistence(data.product),
      productId: data.product.id,
    });
  }
}

// Type assertion
const _check: IMapper<Price, PriceModel> = PriceMapper;
