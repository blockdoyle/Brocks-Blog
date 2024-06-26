const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// GET route for homepage
router.get("/", async (req, res) => {
  try {
    // Get latest 10 posts
    const postData = await Post.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for login
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  // Otherwise, render the 'login' template
  res.render("login");
});

module.exports = router;
