const express = require('express');

const router = express.Router();

// @route    GET api/profile
// @des      Test route
// @ access  Public
router.get('/', (req,res)=>res.send('User route'))


module.exports= router