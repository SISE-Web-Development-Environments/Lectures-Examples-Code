const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// app.use(cors());

// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500"
//   })
// );

app.get("/", (req, res) => {
  res.send("<h1> Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
