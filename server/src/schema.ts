import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResp!
  }

  tyle IncrementTrackViewsResp {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after mutation"
    track: Track
  }

  """
  A track is a group of Modules that teaches about a specific topic
  """
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times the track has been watched"
    numberOfViews: Int
    "The modules included in the track"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching to complete a Track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's approximate length to complete, in minutes"
    length: Int
  }

  """
  Author of a complete Track
  """
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;
