import { gql } from "graphql-modules";

const CreateCategoryInput = gql`
  input CreateCategoryInput {
    name: String!
    depth: Int!
    parentCategoryId: ID
  }
`;

export default CreateCategoryInput;
