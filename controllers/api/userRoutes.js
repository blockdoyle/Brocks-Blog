const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
    });
    console.log(user);
    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    // Save the session data upon successful login
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;

      res.json({ user: user, message: "You are now logged in!" });
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Incorrect username or password, please try again" });
  }
});

module.exports = router;
