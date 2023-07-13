import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // Path relative to the ./src/types.ts file
        contextType: "./context#DataSourceContext",
        // This helps make sense of the mismatch between GraphQL schema
        // and how datasources are implemented i.e. Track schema does not
        // have a authorId field, so typecheck results in an error, if not handled
        mappers: {
          Track: "./models#TrackModel",
          Author: "./models#AuthorModel",
        },
      },
    },
  },
};

export default config;
