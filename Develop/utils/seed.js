const connection = require("../config/connection");
const { User, Thought } = require("../models");
// const { usernames, thoughts, reactions } = require("./data");
// const { } import functions from data.js
const { default: mongoose } = require("mongoose");

const users = [
  {
    username: "Aarron901",
    email: "Aarron901@gmail.com",
    password: "password123",
    friends: [],
  },
  {
    username: "Abdallah3456",
    email: "Abdallah3456@hotmail.com",
    password: "raidpricey!",
    friends: [],
  },
  {
    username: "Jones2345",
    email: "Jones2345@gmail.com",
    password: "kadenJ123!",
    friends: [],
  },
  {
    username: "Zeeshan345",
    email: "Zeeshan345@yahoo.com",
    password: "fcrona123!",
    friends: [],
  },
  {
    username: "Sarah3456",
    email: "Sarah3456@gmail.com",
    password: "D3sm0nd!",
    friends: [],
  },
  {
    username: "Mark1234",
    email: "Mark1234@gmail.com",
    password: "password123",
    friends: [],
  },
];

const posts = [
  {
    thoughtText: "It is a great day today!",
    username: "Mark1234",
    reactions: [],
  },
  {
    thoughtText: "I just saw something funny.",
    username: "Mark1234",
    reactions: [],
  },
  {
    thoughtText: "The sun is shining bright today!",
    username: "Sarah3456",
    reactions: [],
  },
  {
    thoughtText: "I am so tired today it isn't even funny",
    username: "Sarah3456",
    reactions: [],
  },
  {
    thoughtText: "Is it going to rain today?",
    username: "Zeeshan345",
    reactions: [],
  },
  {
    thoughtText: "This look really delicious and I am very hungry",
    username: "Zeeshan345",
    reactions: [],
  },
  {
    thoughtText: "I can't believe that someone would do that!",
    username: "Jones2345",
    reactions: [],
  },
  {
    thoughtText: "I love listening to music. What is your favorite artist?",
    username: "Jones2345",
    reactions: [],
  },
];

const reactions = [
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "Today was bueatiful!",
    username: "Aarron901",
  },
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "Lol, that is funny",
    username: "Aarron901",
  },
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "I love days like today",
    username: "Aarron901",
  },
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "Nap time is calling my name",
    username: "Abdallah3456",
  },
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "I think it might",
    username: "Abdallah3456",
  },
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "I am starving too!",
    username: "Abdallah3456",
  },
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "Me neither!",
    username: "Abdallah3456",
  },
  {
    reactionId: new mongoose.Types.ObjectId(),
    reactionBody: "I love listening to Imagine Dragons",
    username: "Abdallah3456",
  },
];
connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});

  await User.insertMany(users);

  for (let i = 0; i < posts.length; i++) {
    const newThought = await Thought.create({
      thoughtText: posts[i].thoughtText,
      username: posts[i].username,
      reactions: reactions[i],
    });
    await User.findOneAndUpdate(
      { username: posts[i].username },
      {
        $push: { thoughts: newThought.id },
      }
    );
  }

  console.table(users);
  console.table(posts);
  console.table(reactions);
  console.log("Database Seeded!");
  process.exit(1);
});
