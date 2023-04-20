const User = require("../models/User");

module.exports = {
  // GET all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET a single user by its _id
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // POST a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // UPDATE user
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json("No user found");
      }

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // DELETE user
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.id });

      await Thought.deleteMany({ username: deletedUser.username });

      if (!deletedUser) {
        return res.status(404).json("No user found");
      }

      res.json(deletedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Add friend
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { friends: req.params.friendId } },
        { new: true }
      ).populate("friends");

      if (!user) {
        return res.status(404).json("No such user");
      }

      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Remove friend
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      ).populate("friends");

      if (!user) {
        return res.status(404).json("No such user");
      }

      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
