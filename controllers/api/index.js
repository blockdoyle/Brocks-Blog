const router = require("express").Router();

// Import all of the API routes from /api/index.js
const userRoutes = require("./userRoutes");
// const postRoutes = require('./postRoutes');
// const commentRoutes = require('./commentRoutes');

// Use user routes
router.use("/users", userRoutes);
// Use post routes
// router.use('/posts', postRoutes);
// Use comment routes
// router.use('/comments', commentRoutes);

// Export the router
module.exports = router;
