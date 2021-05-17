const express = require("express");
var cors = require('cors')
const app = express();
const morgan = require("morgan"); // logging library
const axios = require("axios")
const port = 3000;

app.use(cors())
// print request logs
app.use(morgan(":method :url :status  :response-time ms"));


// https://random-data-api.com/documentation

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://random-data-api.com/api/dessert/random_dessert");
    res.json(response.data);


  } catch (err) {
    console.log("error: ", err);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
