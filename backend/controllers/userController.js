const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

// @desc create user
//@route POST /users
//@access public
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({ error: "Please fill all fields" });
    } else {
        //check if user exist
        const userExist = await User.findOne({email});
        if(userExist){
            res.status(400).json({ error: "User already exists" });
        }else{
            //hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            //create user
            const user= await User.create({username,email,password:hashedPassword})
            if(user){
            res.status(200).json({data:
                {_id:user.id,
                 username:user.username,
                 email:user.email,
                 token:generateToken(user._id)
                }, message: "Register user" });
            }else{
                res.status(400).json({ error:'invaild user data' });    
            }
        }
    }
 }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc login user
//@route POST /users/login
//@access public
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
          //check if user exist
          const user = await User.findOne({email});
          if(user && (await bcrypt.compare(password, user.password))){
            res.status(200).json({
                data:{
                _id:user.id,
                 username:user.username,
                 email:user.email,
                 token:generateToken(user._id)}, message: "login user" });
          }else{
            res.status(400).json({ error: 'invaild credentials' });
          }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc get user
//@route GET /users/:id
//@access private
const getUser = async (req, res) => {
  try {
    const {_id, username, email} = await User.findById(req.user.id) 
    res.status(200).json({id:_id, username, email, message: "user data" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//generate jwt
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
  generateToken
};
