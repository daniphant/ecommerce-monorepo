import { gql } from "graphql-modules";

const CreateProduct = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    CreateProduct(input: $input) {
      id
      name
      description
      price {
        value
        expiresAt
      }
      category {
        id
        name
      }
    }
  }

  type Mutation {
    CreateProduct(input: CreateProductInput!): Product!
  }
`;

export default CreateProduct;
