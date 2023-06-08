import { v4 as uuidv4 } from "uuid";

type Props = {
  id?: string;
  name: string;
  depth: number;
  fatherCategory?: Category;
};

class Category {
  public id: string;
  public name: string;
  public depth: number;
  public fatherCategory?: Category;

  constructor(props: Props) {
    Object.assign(this, props);
    if (!props.id) {
      this.id = uuidv4();
    }
  }
}

export default Category;
