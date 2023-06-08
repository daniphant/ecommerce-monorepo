import { gql } from "graphql-modules";

const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
  }
`;

export default typeDefs;
