var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

customers_mod = require("./routes/customers");
products_mod = require("./routes/products");

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// POST method route and '/' URI
app.get("/", function(req, res) {
  res.sendStatus(200);
});

app.use("/customers", customers_mod);
app.use("/products", products_mod);

// // error middleware
// app.use(function(err, req, res, next) {
//   res.status(500).send(" Internal error : " + err);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
