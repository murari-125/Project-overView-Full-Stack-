const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  title: String,
  technologies: String,
  frontend: String,
  backend: String,
  availability: String,
});

const Projects = mongoose.model("Projects", projectsSchema, "Projects");
module.exports = Projects;
