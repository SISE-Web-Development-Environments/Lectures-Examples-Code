const express = require("express");
const bodyParser = require("body-parser");
const { v1: uuidv1 } = require("uuid");
const bcrypt = require("bcrypt");

const path = require("path");
const app = express();
const port = 4000;

const users_db = {};

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// handle users cookies creation

const session = require("client-sessions");

app.use(
  session({
    cookieName: "session", // the cookie key name
    secret: "sesami1357sec", // the encryption key
    duration: 30 * 60 * 1000, // 30 min
  })
);

app.get("/test_cookie", function (req, res) {
  req.session.name = "shir";
  res.sendStatus(200);
});

app.get("/home", function (req, res) {
  // check cookie existent and user-info
  if (!(req.session && req.session.id)) {
    res.redirect("/login");
  } else {
    // check that the user-info is valid --> user is authenticated
    for (let user_data of Object.values(users_db)) {
      if (req.session.id == user_data.id) {
        res.sendFile(path.join(__dirname + "/home.html"));
        return;
      }
    }
  }
  res.redirect("/login");
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/login.html"));
  //__dirname : It will resolve to your project folder.
});

// POST method route and '/' URI
app.post("/login", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let user_data = users_db[email];

  // Validate the user cardentails
  if (user_data && !bcrypt.compareSync(password, user.password)) {
    // Will add "set-cookie" header to the response!!
    req.session.id = user_data.id;
    res.send(`<h1> Hello ${user_data.fname}!  </h1>
     <a href="/home">homepage </a>`);
  } else {
    redirect("/login");
  }
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname + "/register.html"));
  //__dirname : It will resolve to your project folder.
});

app.post("/register_data", function (req, res) {
  if (Object.keys(users_db).includes(user_data.email))
    res.send("Email address already exists.  Login or user different one.");
  else {
    let hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;
    user_data = req.body;
    const uuid = uuidv1();
    user_data["id"] = uuid;
    users_db[user_data.email] = user_data;
    console.log(users_db);
    res.redirect("/login");
  }
});

app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname + "/login.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
