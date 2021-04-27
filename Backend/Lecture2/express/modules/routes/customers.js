var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send(req.originalUrl);
});

// /customers/login
router.get("/login", function (req, res) {
  res.send(req.originalUrl);
});



module.exports = router;
