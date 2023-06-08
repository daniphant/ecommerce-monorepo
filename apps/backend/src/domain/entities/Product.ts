import Category from "./Category";
import Price from "./Price";
import { v4 as uuidv4 } from "uuid";

type Props = {
  id?: string;
  name: string;
  prices: Price[];
  category: Category;
};

class Product {
  public id: string;
  public name: string;
  public prices: Price[];
  public category: Category;

  constructor(props: Props) {
    Object.assign(this, props);
    if (!props.id) {
      this.id = uuidv4();
    }
  }
}

export default Product;
