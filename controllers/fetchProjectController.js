const Projects = require("../models/projects");

const fetchProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find({});

    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const searchProject = async (req, res, next) => {
  const query = req.body.query;
  try {
    const projects = await Projects.find({
      $or: [
        { Title: { $regex: query, $options: "i" } },
        { Technologies: { $regex: query, $options: "i" } },
        { Frontend: { $regex: query, $options: "i" } },
        { Backend: { $regex: query, $options: "i" } },
        { Availability: { $regex: query, $options: "i" } },
      ],
    });

    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { fetchProjects, searchProject };
