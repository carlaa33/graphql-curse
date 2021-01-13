import { GraphQLServer } from "graphql-yoga";

//type definition
const typeDefs = `
type Query{
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
}
`;

//Resolvers
const resolvers = {
  Query: {
    title() {
      return "Laptop";
    },
    price() {
      return 32.99;
    },
    releaseYear() {
      return null;
    },
    rating() {
      return 5;
    },
    inStock() {
      return true;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up!");
});
