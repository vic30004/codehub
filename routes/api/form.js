const express = require('express');
const { protect } = require('../../middleware/auth');

const {getAllForums, createForum,addLike,addComment} = require('../../controller/form')

const router = express.Router()


router.get('/',protect,getAllForums);
router.post('/',protect,createForum)

router.put('/:id',protect,addLike)
router.post('/comment/:id',protect,addComment)

module.exports = router

