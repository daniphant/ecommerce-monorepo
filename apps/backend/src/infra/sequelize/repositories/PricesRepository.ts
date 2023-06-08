import Price from "@domain/entities/Price";
import IPricesRepository from "@domain/interfaces/repositories/IPricesRepository";
import PriceModel from "../models/PriceModel";
import PriceMapper from "../mappers/product/PriceMapper";

export default class PricesRepository implements IPricesRepository {
  public async findAll(): Promise<Price[]> {
    const prices = await PriceModel.findAll();

    return prices.map((price) => PriceMapper.toDomain(price));
  }

  public async findById(id: string): Promise<Price | undefined> {
    const price = await PriceModel.findByPk(id);

    return price ? PriceMapper.toDomain(price) : undefined;
  }

  public async save(price: Price): Promise<void> {
    const priceModel = PriceMapper.toPersistence(price);

    await priceModel.save();
  }
}
