const express = require("express");
const bodyParser = require("body-parser");
const { v1: uuidv1 } = require("uuid");
const bcrypt = require("bcryptjs");
const morgan = require("morgan");
const app = express();
const port = 4000;

const users_db = {};

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// handle users cookies creation
// print request logs
app.use(morgan(":method :url :status  :response-time ms"));

const session = require("client-sessions");

app.use(
  session({
    cookieName: "session", // the cookie key name
    secret: "sesami1357sec", // the encryption key
    duration: 20 * 1000, // expired after 20 sec
    activeDuration: 0, // if expiresIn < activeDuration,
    //the session will be extended by activeDuration milliseconds
  })
);

// successfully

app.get("/test_cookie", function (req, res) {
  req.session.name = "shir";
  res.sendStatus(200);
});

app.get("/home", function (req, res) {
  // check cookie existent and user-info
  console.log("req.session && req.session.id: ", req.session && req.session.id);
  if (req.session && req.session.id) {
    // check that the user-info is valid --> user is authenticated
    for (let user_data of Object.values(users_db)) {
      if (req.session.id == user_data.id) {
        res.sendFile(__dirname + "/home.html");
        return;
      }
    }
  }
  // if the user isn't found in the DB, reset the session info and
  // redirect the user to the login page
  req.session.reset();
  res.redirect("/login");
});

// serve the login page to the client
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
  //__dirname : It will resolve to your project folder.
});

// handles login
app.post("/login", function (req, res) {
  let email = req.body.email;
  let user_data = users_db[email]; // get the user by email - sent in login

  // Validate the user cardentails
  if (user_data && bcrypt.compareSync(req.body.password, user_data.password)) {
    // Will add "set-cookie" header to the response!!
    req.session.id = user_data.id;
    res.send(`<h1> Hello ${user_data.fname}!  </h1>
     <a href="/home">homepage </a>`);
  } else {
    res.redirect("/register");
  }
});

// serve the login page to the client
app.get("/logout", function (req, res) {
  req.session.reset(); // reset the session info --> send cookie when  req.session == undefined!!
  res.redirect("/"); // will redirect to  '/' which will get to the default router
});

// serve the register page to the client
app.get("/register", function (req, res) {
  res.sendFile(__dirname + "/register.html");
  //__dirname : It will resolve to your project folder.
});

// handles registration
app.post("/register_data", function (req, res) {
  let user_data = req.body;
  if (Object.keys(users_db).includes(user_data.email))
    res.send("Email address already exists.  Login or user different one.");
  else {
    let hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;
    // create some unique user-id
    const uuid = uuidv1();
    user_data["id"] = uuid;
    users_db[user_data.email] = user_data;
    console.log(users_db);
    res.redirect("/login");
  }
});

// default end-point --> every requested resource that doesn't have an end-point, will reach here
app.use(function (req, res, next) {
  res.sendFile(__dirname + "/login.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
