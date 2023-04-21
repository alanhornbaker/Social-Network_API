# Social-Network_API

## Table of Contents

1.[Description and Purpose](#description)

2.[User Story](#userStory)

3.[Acceptance Criteria](#acceptanceCriteria)

4.[Wireframes and Mock-Ups](#mockups)

5.[Installation](#installation)

6.[Usage](#usage)

7.[Contribution](#contribution)

8.[License](#license)

9.[Questions](#questions)

10.[Bonus](#Bonus)

## Description

The project is an social network where users can share their thoughts, react to friends' thoughts, and create a friend list.

The purpose of the application is to practice the basics of making a social networking application, many of which have become extremely valuable companies that provide valuable services in the modern day.

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Wireframes and Mock-Ups

![Get Users](/Social-Network_API/Develop/public/images/routes-get-users.PNG "Get All Users")
![Get Thoughts](/Social-Network_API/Develop/public/images/routes-get-thoughts.PNG "Get All Thoughts")
![Get One User By Id](/Social-Network_API/Develop/public/images/routes-get-oneUser.PNG "Get One User By Id")
![Get One Thought By Id](/Social-Network_API/Develop/public/images/routes-get-oneThought.PNG "Get One Thought By Id")
![Create New User](/Social-Network_API/Develop/public/images/routes-post-user.PNG "Create New User")
![Update User](/Social-Network_API/Develop/public/images/route-put-updateUser.PNG "Update User")
![Delete User](/Social-Network_API/Develop/public/images/routes-delete-user.PNG "Delete User")

## Models

User

username
String
Unique
Required
Trimmed

email
String
Required
Unique
Must match a valid email address (look into Mongoose's matching validation)

thoughts

Array of \_id values referencing the Thought model
friends

Array of \_id values referencing the User model (self-reference)
Schema Settings

Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

Thought

thoughtText

String
Required
Must be between 1 and 280 characters
createdAt

Date
Set default value to the current timestamp
Use a getter method to format the timestamp on query
username (The user that created this thought)

String
Required
reactions (These are like replies)

Array of nested documents created with the reactionSchema
Schema Settings

Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

Reaction (SCHEMA ONLY)

reactionId

Use Mongoose's ObjectId data type
Default value is set to a new ObjectId
reactionBody

String
Required
280 character maximum
username

String
Required
createdAt

Date
Set default value to the current timestamp
Use a getter method to format the timestamp on query
Schema Settings

This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

## Routes and Controllers

/api/users

GET all users

GET a single user by its \_id and populated thought and friend data

POST a new user:

// example data
{
"username": "lernantino",
"email": "lernantino@gmail.com"
}
PUT to update a user by its \_id

DELETE to remove user by its \_id
/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list

/api/thoughts

GET to get all thoughts

GET to get a single thought by its \_id

POST to create a new thought (don't forget to push the created thought's \_id to the associated user's thoughts array field)

// example data
{
"thoughtText": "Here's a cool thought...",
"username": "lernantino",
"userId": "5edff358a0fcb779aa7b118b"
}
PUT to update a thought by its \_id

DELETE to remove a thought by its \_id

/api/thoughts/:thoughtId/reactions

POST to create a reaction stored in a single thought's reactions array field

DELETE to pull and remove a reaction by the reaction's reactionId value

##

## Installation

You can install this application by forking the repository from github.com/alanhornbaker/Social-Network_API and opening the repository in your text editor. You will also want the LTS version of NPM so the node works.

## Usage

Functions that you will use to to use the application once you have installed it:
Technologies used include express.js, MongoDB and Mongoose ODM.

## Contribution

You can contribute to this application by opening a pull request at github.com/alanhornbaker/Social-Network_API. Currently there are no rules or standards for contribution.

## License

The Alan License

## Questions

Known erros and other issues can be raised to the repository on github at github.com/alanhornbaker/Social-Network_API , or can be sent to my github profile at github.com/alanhornbaker. As last resort, questions can be emailed to me directly at alanhornbaker@gmail.com.

## Bonus

Remove a user's associated thoughts when deleted.
