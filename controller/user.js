const asyncHandler = require('../middleware/async');
const User = require('../models/Users');
const gravatar = require('gravatar')

// @route    POST api/auth/register
// @des      Register User
// @ access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role, username } = req.body;
 
  // Set up avatar
  const avatar = gravatar.url(email, {
    s:'200',//profile pic size
    r:'pg',//rating 
    d:'mm' //default picture
  })

   // Create User
  const user = await User.create({
    name,
    email,
    password,
    role,
    avatar,
    username
  });

  sendTokenResponse(user,200,res)

});



// Get token from model, create cookie and send response 
const sendTokenResponse = (user,statusCode, res)=>{
    const token = user.getSignedJwtToken();
  
    const options = {
      expires: new Date (Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 *1000),//days until it expires, this depends on the COOKIE_EXPIRE date
      httpOnly: true
    };
  
    if(process.env.NODE_ENV === 'production'){
      options.secure = true
    }
    res.status(statusCode)
    .cookie('token', token, options)
    .json({
      token
    })
  }
  