import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Default,
} from "sequelize-typescript";

@Table({
  tableName: "categories",
})
export default class CategoryModel extends Model {
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

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public depth!: number;

  @ForeignKey(() => CategoryModel)
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  public fatherCategoryId?: string;

  @BelongsTo(() => CategoryModel)
  public fatherCategory?: CategoryModel;
}
