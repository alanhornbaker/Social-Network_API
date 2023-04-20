const usernames = [
  "Aaran123",
  "Aaren456",
  "Aarez789",
  "Aarman012",
  "Aaron345",
  "Aaron-James678",
  "Aarron901",
  "Aaryan234",
  "Aaryn567",
  "Aayan890",
  "Aazaan1234",
  "Abaan5678",
  "Abbas9012",
  "Abdallah3456",
  "Abdalroof7890",
  "Abdihakim123",
  "Abdirahman456",
  "Abdisalam789",
  "Abdul234",
  "Abdul-Aziz567",
  "Abdulbasir890",
  "Abdulkadir1234",
  "Abdulkarem5678",
  "Smith9012",
  "Jones2345",
  "Coollastname678",
  "enter_name_here123",
  "Ze456",
  "Zechariah789",
  "Zeek012",
  "Zeeshan345",
  "Zeid678",
  "Zein901",
  "Zen234",
  "Zendel567",
  "Zenith890",
  "Zennon1234",
  "Zeph5678",
  "Zerah9012",
  "Zhen2345",
  "Zhi678",
  "Zhong012",
  "Zhuo345",
  "Zi6789",
  "Zidane1234",
  "Zijie5678",
  "Zinedine901",
  "Zion2345",
  "Zishan678",
  "Ziya012",
  "Ziyaan345",
  "Zohaib6789",
  "Zohair1234",
  "Zoubaeir5678",
  "Zubair9012",
  "Zubayr2345",
  "Zuriel6789",
  "Xander123",
  "Jared456",
  "Courtney789",
  "Gillian012",
  "Clark345",
  "Jared678",
  "Grace901",
  "Kelsey234",
  "Tamar567",
  "Alex890",
  "Mark1234",
  "Tamar5678",
  "Farish9012",
  "Sarah3456",
  "Nathaniel7890",
  "Parker123",
];

// const emailSuffix = "@yahoo.com";

// const emailAddresses = usernames.map((username) => `${username}${emailSuffix}`);

// console.log(emailAddresses);

const thoughts = [
  "Decision Trackers are awesome",
  "Find My Phone is a useful app",
  "Learn Piano is not very good for learning Piano",
  "Starbase Defender is a great game, I love it",
  "Tower Defense is okay",
  "Monopoly Money is better than real money IMO",
  "Movie trailers are just the best parts of a movie distilled into 90 seconds",
  "Hello world, this is a comment",
  "Social media is a big waste of time",
  "Notes is my most used app",
  "Messages is open on my computer 24/7",
  "Email is open on my computer",
  "Compass is never opened",
  "Firefox is great for privacy",
];

const reactions = [
  "I completely agree! Decision Trackers have helped me so much with staying organized and making important choices.",
  "Definitely! Find My Phone has saved me from losing my phone so many times. It's such a useful app to have.",
  "That's too bad to hear. I was considering using Learn Piano to pick up a new hobby, but I'll have to look elsewhere.",
  "I'm so glad you enjoy Starbase Defender! It's such a fun game to play.",
  "Yeah, Tower Defense is alright. It's not my favorite, but it can be a good way to pass the time.",
  "Haha, I can see why you would think that. Monopoly Money definitely has its advantages.",
  "I know, right? Sometimes I feel like I don't even need to see the whole movie after watching the trailer.",
  "Hey, that's a classic programming line! How's your coding going?",
  "I can understand why you might feel that way. Social media can definitely be overwhelming and time-consuming.",
  "I'm with you on that one. Notes is such a handy app to have for jotting down ideas or making lists.",
  "Same here! Messages is always open on my computer so I can stay connected with friends and family.",
  "I don't use Email as much as I used to, but it's still an essential tool for communication.",
  "I know what you mean. I rarely ever need to use Compass, but it's good to have just in case.",
  "Agreed! Firefox is a great browser option for those who value privacy and security.",
];

const lorum = [
  "lorem",
  "imsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "curabitur",
  "vel",
  "hendrerit",
  "libero",
  "eleifend",
  "blandit",
  "nunc",
  "ornare",
  "odio",
  "ut",
  "orci",
  "gravida",
  "imperdiet",
  "nullam",
  "purus",
  "lacinia",
  "a",
  "pretium",
  "quis",
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

const getRandomPost = (words) => {
  let post = "";
  for (let i = 0; i < words; i++) {
    post += ` ${getRandomWord()}`;
  }
  return post;
};

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUsername = () =>
  `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
console.log(usernames);
// Function to generate random comments given a number (ex. 10 comments === getRandomComments(10))
const getRandomThought = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      text: getRandomArrItem(thoughts),
      username: getRandomName().split(" ")[0],
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  usernames,
  thoughts,
  reactions,
};
