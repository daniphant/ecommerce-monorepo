import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    "./src/infra/graphql/modules/**/(types|inputs|queries|mutations)/!(*.test).ts",
  ],
  generates: {
    "./src/infra/graphql/modules/": {
      preset: "graphql-modules",
      presetConfig: {
        baseTypesPath: "../generated-types/graphql.ts",
        filename: "generated-types/module-types.ts",
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};
export default config;
