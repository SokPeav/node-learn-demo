//import express and it return function
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const blogRoute = require("./route/blogRoute");
const userRoute = require("./route/userRoute");

const app = express();

const dbURI =
  "mongodb+srv://Terry:terry1231@blog.3ihjk.mongodb.net/node-blog?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
//register view engine
app.set("view engine", "ejs");
app.get("*", checkUser);
app.get("/", requireAuth, (req, res) => {
  res.redirect("/blog");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "hello" });
});

app.use(blogRoute, userRoute);

app.use((req, res) => {
  res.status(404).render("error");
});
