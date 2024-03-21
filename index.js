const express = require("express");
const dbconnect = require("./config/db");
const app = express();
require("dotenv").config();
const cors = require("cors");

// import multiple funtions as an object from projectcontroller
const projectcontroller = require("./controllers/projectcontroller");

dbconnect();

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("Potfolio Backend");
});

app.get("/projects", () => {});

app.post("/postproject", projectcontroller.postproject);

app.get("/getprojects", projectcontroller.getprojects);

app.listen(process.env.PORT, () => {
  console.log("Port is running", process.env.PORT);
});
