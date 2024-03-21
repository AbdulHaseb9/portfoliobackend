const express = require("express");
const dbconnect = require("./config/db");
const app = express();
require("dotenv").config();

// import multiple funtions as an object from projectcontroller
const projectcontroller = require("./controllers/projectcontroller");

dbconnect();

app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Potfolio Backend");
});

app.get("/projects", () => {});

app.post("/postproject", projectcontroller.postproject);

app.get("/getprojects", projectcontroller.getprojects);

app.listen(process.env.PORT, () => {
  console.log("Port is running", process.env.PORT);
});
