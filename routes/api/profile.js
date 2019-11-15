const express = require('express');
const {protect} = require('../../middleware/auth');
const {getProfile, updateProfile} = require('../../controller/profile');
const router =express.Router()

// @route    GET api/profile
// @des      Test route
// @ access  Public
router.get('/me', protect,getProfile);
router.post('/',protect,updateProfile)


module.exports= router