const express = require("express");
const projectsController = require("../controllers/fetchProjectController");
const router = express.Router();
router.get("/projects", projectsController.fetchProjects);
router.post("/project", projectsController.searchProject);

module.exports = router;
