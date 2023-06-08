import Price from "@domain/entities/Price";

export default interface IPricesRepository {
  findAll(): Promise<Price[]>;
  findById(id: string): Promise<Price | undefined>;
  save(price: Price): Promise<void>;
}
