const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");

const cookieParser = require("cookie-parser");
const user = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json()); // send data in json format
app.use(express.urlencoded({ extended: true })); // send and read url encoded data
app.use(cookieParser()); // to read the cookie
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// route only work when user logedin
app.get("/profile", isLoggedIn, (req, res) => {
  res.send('Hi malware');
});

app.post("/register", async (req, res) => {
  let { email, password, age, name, username } = req.body; // destructuring the data
  let user = await userModel.findOne({ email }); // findone on basis of email so instead of email:email use only email
  if (user) return res.status(500).send("Email already exist");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      // Store hash in your password DB.
      let user = await userModel.create({
        username,
        email,
        age,
        name,
        password: hash,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "secretkey");
      res.cookie("token", token);
      res.send("User registered");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body; // destructuring the data
  let user = await userModel.findOne({ email }); // findone on basis of email so instead of email:email use only email
  if (!user) return res.send("Email or password is incorrect!");

  bcrypt.compare(password, user.password, (err, result) => {
    // result == true
    if (result) {
      
      let token = jwt.sign({ email: email, userid: user._id }, "secretkey");
      res.cookie("token", token);
      res.status(200).send("Login Successfull");
    } else {
      res.send("Email or password is incorrect!");
    }
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

// middleware to protect the routes
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.send("You need to login first");
  else {
    // get the email and password that store above in token
    let data = jwt.verify(req.cookie.token, "secretkey");
    req.user = data;
  }

  next();
}

app.listen("3000", (req, res) => {
  console.log("Server is running...");
});
