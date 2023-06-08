import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Default,
} from "sequelize-typescript";
import ProductModel from "./ProductModel";

@Table({
  tableName: "prices",
})
export default class PriceModel extends Model {
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
  })
  public id!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public value!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  public expiresAt!: Date;

  @BelongsTo(() => ProductModel)
  public product!: ProductModel;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public productId!: string;
}
