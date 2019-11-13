const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const User = require('../models/Users');


// @route    GET api/auth/register
// @des      Register User
// @ access  Public
exports.register = asyncHandler(async (req,res,next) =>{
    // const { name, email, password, role } = req.params;
    console.log(req.body)
    // Create User
  
    // const user = await User.create({
    //   name,
    //   email,
    //   password,
    //   role
    // });
    res.status(200).json({success:true})
})