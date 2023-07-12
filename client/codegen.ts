
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: "src/**/*.tsx",
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      plugins: []
    },
  },
  ignoreNoDocuments: true,
};

export default config;
