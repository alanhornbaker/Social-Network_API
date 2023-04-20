const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

// /api/users
router.route("/").get(getThoughts).post(createThought);

// /api/users/:userId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

thought.route("/:thoughtId/reactions").post(createReaction);

thought.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
