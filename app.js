const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const store = [];
const homeStartingContent = {
  rating: 4,
  username: "Shivang",
  review:
    "The book arrived without any damages and came earlier than expected! The weird thing is I got a signed copy!?!?! I'm really happy about that :) Also can't wait to read it",
};

store.push(homeStartingContent)

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/working", function (req, res) {
  res.render("working");
});

app.get("/plans", function (req, res) {
  res.render("plans");
});

app.get("/testimonials", function (req, res) {
  res.render("testimonials");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/signin", function (req, res) {
  res.render("signin");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/users", function (req, res) {
  res.render("users");
});

app.get("/book_page", function (req, res) {
  res.render("book_page", {
    starting_content: store[0],
    composed_content: store,
  });
});

app.get("/review", function (req, res) {
  res.render("review");
});

app.post("/review", function (req, res) {
  const post = {
    username: req.body.username,
    rating: req.body.rating,
    review: req.body.review,
  };

  store.push(post);
  res.redirect("/book_page");
});

app.listen(30000, function () {
  console.log("Server started hoga ?? - 30000");
});
