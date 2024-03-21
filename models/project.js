const mongoose = require("mongoose");

const projectschema = mongoose.Schema({
  // Project Name
  name: {
    type: String,
    required: true,
  },
  // Description about project
  description: {
    type: String,
    required: true,
  },
  // URL To preview site live
  livepreviewurl: {
    type: String,
    required: true,
  },
  // URL To get source code
  sourcecodeurl: {
    type: String,
    required: true,
  },
});

// projects info is a collection name
const Project = mongoose.model("projectsinfo", projectschema);

module.exports = Project;
