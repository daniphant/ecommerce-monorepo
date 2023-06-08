import { gql } from "graphql-modules";

const CreateProductInput = gql`
  input CategoryId {
    id: ID!
  }

  input CreateProductInput {
    name: String!
    price: CreatePriceInput!
    category: CategoryId!
  }
`;

export default CreateProductInput;
