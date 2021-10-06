const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
    "Fetch a specific module, provided a module's ID"
    module(id: ID!): Module!
  }

  type Module {
    content: String
    videoUrl: String
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  type Track {
    id: ID!
    "The track's title"
    title: String
    "The track's main Author"
    author: Author!
    "The tracks ilustration to display in track card of track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track complete description can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "A module is a single unit of teaching. Multiples modules compose a track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The module's length in minutes"
    length: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
