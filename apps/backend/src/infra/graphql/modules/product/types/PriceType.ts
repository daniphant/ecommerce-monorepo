import { gql } from "graphql-modules";

const typeDefs = gql`
  type Price {
    value: Float!
    expirationDate: String!
  }
`;

export default typeDefs;
