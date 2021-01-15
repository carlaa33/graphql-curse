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
    author: "1",
  },
  {
    id: "11",
    title: "GraphQL 201",
    body: "this is how to use GraphQL",
    published: false,
    author: "1",
  },
  {
    id: "12",
    title: "Programming Music",
    body: "",
    published: true,
    author: "2",
  },
];

const comments = [
  {
    id: "102",
    text: "Hi",
    author: "1",
    post: "10",
  },
  {
    id: "103",
    text: "Bye",
    author: "2",
    post: "11",
  },
  {
    id: "104",
    text: "Goodbye",
    author: "3",
    post: "12",
  },
  {
    id: "105",
    text: "Goodbye2",
    author: "1",
    post: "10",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
