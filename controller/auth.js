const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/Users');

// @route    POST api/auth/login
// @des      Login User
// @ access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  // validate email,username and password

  if (!username || !password) {
    return next(
      new ErrorResponse(
  
        res.status(400).json({error:'Please provide an email or a username and a passwrod'})
      )
    );
  }

  // Check for user
  const user = await User.findOne({ username }).select('+password');

  if (!user) {
    const message='Invalid credentials';
    res.status(401).json({error:message})
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    const message='Invalid credentials';
    res.status(401).json({error:message})
  }


sendTokenResponse(user,200,res)

});


// @route    get api/auth
// @des      Get Single User
// @ access  Public
exports.getUser = asyncHandler(async (req,res,next)=>{
  console.log(req.body)
  const user = await User.findById(req.user.id).select('-password');
  

  res.status(200).json({
    success: true,
    data: user
  });

})



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
    success: true,
    token
  })
}


