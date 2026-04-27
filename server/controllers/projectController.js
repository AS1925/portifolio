const Project = require("../models/Project");


// GET single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all projects
exports.getProjects = async (req, res) => {
  console.log("API HIT");

  try {
    const projects = await Project.find().maxTimeMS(5000); // ⏱️ timeout protection
    res.json(projects);
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// ADD project
exports.addProject = async (req, res) => {
  const newProject = new Project(req.body);
  const saved = await newProject.save();
  res.json(saved);
};

// DELETE project
exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
// UPDATE project
exports.updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // returns updated data
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};