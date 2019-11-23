const express = require('express');
const { protect } = require('../../middleware/auth');
const {getAllForums, createForum} = require('../../controller/form')
const router = express.Router()


router.get('/',protect,getAllForums);
router.post('/',protect,createForum)

module.exports= router