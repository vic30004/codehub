const express = require('express');
const ErrorResponse = require('../../utils/errorResponse')
const asyncHandler = require('../../middleware/async')
const router = express.Router();

// @route    POST api/users
// @des      register user
// @ access  Public
router.post('/', (req,res,next)=>res.send('User route'))


module.exports= router