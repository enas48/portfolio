const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

const protect = async(req,res,next) => {
let token;
    try {
        //get token from header
        token = req.headers.authorization.split(" ")[1]
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //get user from token
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch(err){
        res.status(401).json({mesaage:'Not authorized'}) 
    }
if(!token){
    res.status(401).json({mesaage:'Not authorized, no token'})  
}
}
module.exports = {protect}