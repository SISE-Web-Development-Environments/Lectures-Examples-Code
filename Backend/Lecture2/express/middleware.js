var express = require("express");
var bodyParser = require("body-parser");
const axios = require("axios"); // supports promises

var app = express();
var port = 3000;

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
  req["message"] = ["I just came from the middleware"];

  next();
});

app.use("/", function (req, res, next) {
  req["message"].push("Im a middleware of '/test*' uri only");

  next();
});

// Admin EXAMPLE --------------------------

app.use("/admin/:id", function (req, res, next) {
  if (req.params.id != 0) res.sendStatus(401);
  else next();
});

app.get("/admin/:id/summary", function (req, res) {
  res.send("here is your summary data");
});

app.get("/error", function (req, res, next) {
  axios
    .get("www.somthing_not_real.com")
    .then((resp) => {
      console.log(resp.data);
    })
    .catch(function (error) {
      // Different error handlers for axios !!
      if (error.response) {
        // Request made and server responded
        console.log("error.response.data", error.response.data);
        console.log("error.response.status", error.response.status);
        console.log("error.response.headers", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("error.request", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }

      next("SOME ERROR");
    });
});

// POST method route and '/' URI
app.post("/", function (req, res) {
  data = req.body;
  res.send([data, req.message]);
});

app.get("/test/me", function (req, res) {
  res.send(req.message);
});

app.use(function (req, res, next) {
  res.status(200).send("No Error middleware");
});

app.use(function (err, req, res, next) {
  res.status(500).send("Error middleware");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
