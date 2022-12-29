const projectService = require("../services/projectService");
const User = require("../models/UserModel");

// @desc get projects
//@route GET /projects
//@access private
const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json({ data: projects, message: "Get projects" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
}
// @desc create project
//@route POST /projects
//@access private
const createProject = async (req, res) => {
  try {
    const {title, url, demo, image} = req.body
    const project = await projectService.createProject({title, url, demo, image, user:req.user.id});
    res.status(200).json({data: project, message: "Create project" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
// @desc get project
//@route GET /projects/:id
//@access private
const getProjectById = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if(!project){
      res.status(400).json({error:'project not found'})
    } else{
    res.status(200).json({data: project, message: `find project ${req.params.id}` });
    } 
      } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
// @desc update project
//@route put /projects/:id
//@access private
const updateProject = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if(!project){
      res.status(400).json({error:'project not found'})
    } else{
    const user = await User.findById(req.user.id)
    //check fpr  user 
    if(!user){
      res.status(401).json({ error: 'user not found'});
    }
    //make sure user is logged in match project user
    if(project.user.toString() !== user.id){
      res.status(401).json({ error: 'user not authorized'});
    }
    const updatedProject = await projectService.updateProject(req.params.id, req.body);
    res.status(200).json({ data:updatedProject, message: `update project ${req.params.id}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
}
// @desc delete project
//@route delete /projects/:id
//@access private
const deleteProject = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if(!project){
      res.status(400).json({error:'project not found'})
    } else{
    const deletedProject = await projectService.deleteProject(req.params.id);
    res.status(200).json({ message: `deleted project ${req.params.id}` });
  } 
  }catch (err) {
    res.status(500).json({ error: err.message });
  }
}
module.exports = {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  
};
