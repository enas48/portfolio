const projectService = require("../services/projectService");
const User = require("../models/UserModel");
const HttpError = require("../middleware/errorMiddleware");
// @desc get projects
//@route GET /projects
//@access private
const getProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json({ data: projects, message: "Get projects" });
  } catch (err) {
    const error = new HttpError( err.message , 500);
    return next(error);
  } 
}
// @desc create project
//@route POST /projects
//@access private
const createProject = async (req, res, next) => {
  try {
    const {title, url, demo, image} = req.body
    const project = await projectService.createProject({title, url, demo, image, user:req.user.id});
    res.status(200).json({data: project, message: "Create project" });
  } catch (err) {
    const error = new HttpError( err.message , 500);
    return next(error);

  }
}
// @desc get project
//@route GET /projects/:id
//@access private
const getProjectById = async (req, res, next) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if(!project){
      const error = new HttpError( 'project not found' , 400);
      return next(error);
     
    } else{
    res.status(200).json({data: project, message: `find project ${req.params.id}` });
    } 
      } catch (err) {
        const error = new HttpError( err.message , 500);
        return next(error);
  }
}
// @desc update project
//@route put /projects/:id
//@access private
const updateProject = async (req, res, next) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if(!project){
      const error = new HttpError('project not found' , 400);
      return next(error);
    } else{
    const user = await User.findById(req.user.id)
    //check fpr  user 
    if(!user){
      const error = new HttpError('user not found' , 401);
      return next(error);
    }
    //make sure user is logged in match project user
    if(project.user.toString() !== user.id){
      const error = new HttpError( 'user not authorized' , 401);
      return next(error);
    }
    const updatedProject = await projectService.updateProject(req.params.id, req.body);
    res.status(200).json({ data:updatedProject, message: `update project ${req.params.id}` });
    }
  } catch (err) {
    const error = new HttpError( err.message , 500);
    return next(error);
  } 
}
// @desc delete project
//@route delete /projects/:id
//@access private
const deleteProject = async (req, res, next) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if(!project){
      const error = new HttpError('project not found' , 400);
      return next(error);
    } else{
    const deletedProject = await projectService.deleteProject(req.params.id);
    res.status(200).json({ message: `deleted project ${req.params.id}` });
  } 
  }catch (err) {
    const error = new HttpError( err.message , 500);
    return next(error);
  }
}
module.exports = {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  
};
