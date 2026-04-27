const express = require("express");
const router = express.Router();
const {
  getProjects,
  addProject,
  deleteProject,
  updateProject, // 👈 add this
} = require("../controllers/projectController");

router.get("/", getProjects);
router.post("/", addProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);
module.exports = router;