const express = require('express');
const {protect} = require('../../middleware/auth');
const {getProfile, updateProfile, getAllProfiles} = require('../../controller/profile');
const router =express.Router()

// @route    GET api/profile
// @des      Test route
// @ access  Public
router.get('/me', protect,getProfile);
router.post('/',protect,updateProfile)
router.get('/',getAllProfiles)

module.exports= router