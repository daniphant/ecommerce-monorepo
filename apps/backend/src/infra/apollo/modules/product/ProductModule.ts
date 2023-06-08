import { loadFilesSync } from "@graphql-tools/load-files";
import { createModule } from "graphql-modules";
import { join } from "path";
import resolvers from "./resolvers";

const ProductModule = createModule({
  id: "product-module",
  dirname: __dirname,
  typeDefs: [
    ...loadFilesSync(join(__dirname, "./types/*.ts")),
    ...loadFilesSync(join(__dirname, "./inputs/*.ts")),
    ...loadFilesSync(join(__dirname, "./queries/*.ts")),
    ...loadFilesSync(join(__dirname, "./mutations/*.ts")),
  ],
  resolvers: [resolvers],
});

export default ProductModule;
