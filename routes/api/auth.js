const express = require('express');
const {login,getUser} = require('../../controller/auth')
const router = express.Router();
const {protect} = require('../../middleware/auth')



router.post('/login',login)
router.get('/',protect,getUser)
module.exports= router