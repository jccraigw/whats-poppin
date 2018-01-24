const router = require("express").Router();
const PostController = require("../../controllers/PostController");

// Matches with "/api/posts"
router.route("/")
  .get(PostController.findAll)
  .post(PostController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(PostController.findById)
  .put(PostController.update)
  .delete(PostController.remove);

module.exports = router;
