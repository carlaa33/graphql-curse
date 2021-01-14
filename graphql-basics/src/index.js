import { GraphQLServer } from "graphql-yoga";

//Demo user data
const users = [
  {
    id: "1",
    name: "Carla",
    email: "carla@email.com",
    age: 26,
  },
  {
    id: "2",
    name: "Maria",
    email: "maria@email.com",
  },
  {
    id: "3",
    name: "Hector",
    email: "hector@email.com",
  },
];

const posts = [
  {
    id: "10",
    title: "GraphQL 101",
    body: "this is how to use GraphQL",
    published: true,
  },
  {
    id: "11",
    title: "GraphQL 201",
    body: "this is how to use GraphQL",
    published: false,
  },
  {
    id: "12",
    title: "Programming Music",
    body: "",
    published: false,
  },
];

//type definition
const typeDefs = `
type Query{
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    me: User!
    post: Post!

}
type User{
    id:ID!
    name: String!
    email: String!
    age: Int

}

type Post{
    id: ID!
    title: String!
    body: String!
    published: Boolean!
}

`;

//Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    me() {
      return {
        id: "123098",
        name: "Carla",
        email: "carla@email.com",
      };
    },
    post() {
      return {
        id: "092",
        title: "Graphql 181",
        body: "",
        published: false,
      };
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
