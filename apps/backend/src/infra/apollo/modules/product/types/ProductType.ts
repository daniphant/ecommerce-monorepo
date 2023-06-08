import { gql } from "graphql-modules";

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: Category!
    prices: [Price!]!
  }
`;

export default typeDefs;
