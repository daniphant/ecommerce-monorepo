import { ApolloServer } from "apollo-server";
import application from "./application";

const executor = application.createApolloExecutor();
const schema = application.schema;

const server = new ApolloServer({ schema, executor });

export default server;
