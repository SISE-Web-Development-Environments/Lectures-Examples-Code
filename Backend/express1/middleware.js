var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   req["message"] = ["I just came from the middleware"];

//   next();
// });

// app.use("/test", function(req, res, next) {
//   req["message"].push("Im a middleware of '/test*' uri only");

//   next();
// });

// ADMIN EXAMPLE --------------------------

// app.use("/manage/:id", function(req, res, next) {
//   if (req.params.id != 0) res.sendStatus(401);
//   else next();
// });

// app.get("/manage/:id/summary", function(req, res) {
//   res.send("here is your summary data");
// });

// POST method route and '/' URI
app.post("/", function(req, res) {
  data = req.body;
  res.send([data, req.message]);
});

app.get("/test/me", function(req, res) {
  res.send(req.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
