const router = require("express").Router();
const usersRoutes = require("./users");
const postRoutes = require("./posts");
// const commentRoutes = require("./comments");

// User routes
router.use("/users", usersRoutes);
router.use("/posts", postRoutes);
// router.use("/comments", commentRoutes);

module.exports = router;
