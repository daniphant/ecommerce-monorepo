import { gql } from "graphql-modules";

const typeDefs = gql`
  type Query {
    getAllProducts: [Product!]!
  }
`;

export default typeDefs;
