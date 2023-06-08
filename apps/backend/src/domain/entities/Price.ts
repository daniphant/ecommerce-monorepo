import Product from "./Product";
import { v4 as uuidv4 } from "uuid";

type Props = {
  id?: string;
  value: number;
  expirationDate: Date;
  product: Product;
};

class Price {
  public id: string;
  public value: number;
  public expirationDate: Date;
  public product: Product;

  constructor(props: Props) {
    Object.assign(this, props);

    if (!props.id) {
      this.id = uuidv4();
    }
  }
}

export default Price;
