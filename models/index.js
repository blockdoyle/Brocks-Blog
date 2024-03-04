// import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// create associations

// User can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// A Post can belong to one user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// A comment can belong to only one user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// A comment can belong to only one post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

// A user can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// A post can have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
