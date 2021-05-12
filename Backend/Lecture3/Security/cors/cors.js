const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Letting all origins to pass
app.use(cors());

// letting a custom origin to pass
// app.use(
//   cors({
//     origin: "http://127.0.0.1:3000"
//   })
// );

app.get("/", (req, res) => {
  res.send("Im am localhost:3000 !!!");
});


app.get("/page", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
