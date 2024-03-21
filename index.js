const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, resp) => {
  resp.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Port is running", process.env.PORT);
});
