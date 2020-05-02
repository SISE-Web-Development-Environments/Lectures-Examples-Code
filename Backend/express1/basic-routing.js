const express = require("express");
const app = express();
const port = 3000;

// GET method route and '/' URI
app.get("/", function(req, res) {
  res.send("GET request to the homepage");
});

// POST method route and '/' URI
app.post("/", function(req, res) {
  res.send("POST request to the homepage");
});

// PUT method route and '/test' URI
app.put("/test", function(req, res) {
  res.send("PUT request to test path");
});

// GET method route and '/test*' URI
app.get("/test", function(req, res) {
  res.send([1, 2, 3]);
});

// GET method route and '/test*' URI
app.get("/test*", function(req, res) {
  res.send("GET request to test* path");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


