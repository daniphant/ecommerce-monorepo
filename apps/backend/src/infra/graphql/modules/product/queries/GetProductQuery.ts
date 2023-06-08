import { gql } from "graphql-modules";

const typeDefs = gql`
  type Query {
    getProduct(id: ID!): Product!
  }
`;

export default typeDefs;
