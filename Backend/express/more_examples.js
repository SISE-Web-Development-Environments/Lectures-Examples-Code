const express = require("express");
const morgan = require("morgan"); // logging library
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// print request logs
app.use(morgan(":method :url :status  :response-time ms"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/no-content", (req, res) => {
  res.status(200).send("Hello World!");
  // res.status(204).send("Hello World!");
});

app.post("/", (req, res) => {
  res.sendStatus(201);
  // res.sendStatus(401);
});

// receive http post request
// on postman use x-www-form-urlencoded - will send all values as strings
// using raw -> JSON will send JSON
app.post("/data", function (req, res) {
  // access with req.body to the sended data
  let someData = req.body;
  console.log(req.body);
  res.send(someData);
});

app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params); // { "userId": "34", "bookId": "8989" }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
