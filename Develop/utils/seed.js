const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUsername, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThought(4);

  for (let i = 0; i < 20; i++) {
    const userName = getRandomUsername();
    const email = `${userName}@yahoo.com`;

    users.push({
      userName,
      email,
      thoughts,
      friends,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
