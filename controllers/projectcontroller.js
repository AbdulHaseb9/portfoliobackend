const Project = require("../models/project");

// Function that post projects data to mongodb
const postproject = async (req, resp) => {
  const { name, description, livepreviewurl, sourcecodeurl } = req.body;

  const newProject = new Project({
    name,
    description,
    livepreviewurl,
    sourcecodeurl,
  });

  await newProject.save();

  resp.send(newProject);
};
// Post Function End

// Function that get projects data from mongodb
const getprojects = async (req, resp) => {
  const projects = await Project.find();

  resp.json(projects);
};
// Get Function End

// Export multiple function
module.exports = { postproject, getprojects };
