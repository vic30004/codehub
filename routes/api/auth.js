const express = require('express');
const ErrorResponse = require('../../utils/errorResponse')
const asyncHandler = require('../../middleware/async')
const router = express.Router();

// @route    GET api/auth
// @des      Test route
// @ access  Public
router.get('/', (req,res)=>res.send('User route'))


module.exports= router