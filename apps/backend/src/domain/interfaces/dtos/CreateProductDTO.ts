export class CreateProductDTO {
  name: string;
  categoryId: string;
  price: {
    value: number;
    expiresAt: string;
  };

  constructor(props: CreateProductDTO) {
    Object.assign(this, props);
  }
}
