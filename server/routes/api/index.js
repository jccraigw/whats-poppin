const router = require("express").Router();
const usersRoutes = require("./users");
const postRoutes = require("./posts")

// User routes
router.use("/users", usersRoutes);
router.use("/posts", postRoutes);

module.exports = router;
