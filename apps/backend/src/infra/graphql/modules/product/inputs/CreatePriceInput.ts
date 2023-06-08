import { gql } from "graphql-modules";

const CreatePriceInput = gql`
  input CreatePriceInput {
    value: Float!
    expiresAt: String!
  }
`;

export default CreatePriceInput;
