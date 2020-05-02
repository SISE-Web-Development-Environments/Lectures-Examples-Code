const express = require("express");
const morgan = require("morgan"); // logging library
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

// print request logs
app.use(morgan(":method :url :status  :response-time ms"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route and '/' URI
app.get("/", function (req, res) {
  res.send("GET request to the homepage");
});

// POST method route and '/' URI
app.post("/", function (req, res) {
  console.log(req.body);
  res.send("POST request to the homepage");
});

// PUT method route and '/test' URI
app.put("/test", function (req, res) {
  res.send("PUT request to test path");
});

// GET method route and '/test' URI
app.get("/test", function (req, res) {
  res.send([1, 2, 3]);
});

// GET method route and '/test*' URI
app.get("/test*", function (req, res) {
  res.send("GET request to test* path");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
