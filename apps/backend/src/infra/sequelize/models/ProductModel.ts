import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  Default,
} from "sequelize-typescript";
import CategoryModel from "./CategoryModel";
import PriceModel from "./PriceModel";

@Table({
  tableName: "products", // Adjust the table name as per your database schema
})
export default class ProductModel extends Model {
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  public id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public name!: string;

  // Associations
  @ForeignKey(() => CategoryModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public categoryId!: string;

  @BelongsTo(() => CategoryModel)
  public category!: CategoryModel;

  @HasMany(() => PriceModel)
  public prices!: PriceModel[];
}
