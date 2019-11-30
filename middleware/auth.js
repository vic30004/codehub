const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const errorResponse = require('../utils/errorResponse.js');
const User = require('../models/Users');

// Protect Routes

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    //   set token from bearer token in header
    token = req.headers.authorization.split(' ')[1];
    // set token from cookie
  } 
  else if (req.cookies.token) {
    token = req.cookies.token;
  }

  // Make sure token is exists

  if (!token) {
    return next(new errorResponse('Not authorize to access this route', 401));
  }
  try {
    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(new errorResponse('Not authroized to access this route', 401));
  }
});

