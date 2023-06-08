import { v4 as uuidv4 } from "uuid";
import Product from "./Product";
import User from "./User";

type Props = {
  id?: string;
  user: User;
  products: Product[];
};

class Cart {
  public id: string;
  public user: User;
  public products: Product[];

  constructor(props: Props) {
    Object.assign(this, props);

    if (!props.id) {
      this.id = uuidv4();
    }
  }
}

export default Cart;
