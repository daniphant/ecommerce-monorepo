import { v4 as uuidv4 } from "uuid";

type Props = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor(props: Props) {
    Object.assign(this, props);
    if (!props.id) {
      this.id = uuidv4();
    }
  }
}

export default User;
