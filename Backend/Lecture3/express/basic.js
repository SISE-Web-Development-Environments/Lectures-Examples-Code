const express = require("express");
const app = express();
const morgan = require("morgan"); // logging library
const port = 3000;

// print request logs
app.use(morgan(":method :url :status  :response-time ms"));

app.get("/", (req, res) => {
  res.send("GET Hello World!");
});

app.post("/post", (req, res) => {
  res.send("POST Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.