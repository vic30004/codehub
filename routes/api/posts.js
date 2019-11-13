const express = require('express');

const router = express.Router();

// @route    GET api/auth
// @des      Test route
// @ access  Public
router.get('/', (req,res)=>res.send('User route'))


module.exports= router