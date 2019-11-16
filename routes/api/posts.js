const express = require('express');
const { protect } = require('../../middleware/auth');
const {createPosts,getAllPosts,getPost,deletePost,likePost,unlikePost,comment,deleteComment} = require('../../controller/posts')


const router = express.Router();

// @route    GET api/auth
// @des      Test route
// @ access  Public
router.post('/',protect,createPosts)
router.post('/comments/:id',protect,comment)
router.get('/',getAllPosts);
router.get('/:id',getPost);
router.delete('/:id',protect,deletePost)
router.delete('/comment/:id/:comment_id',protect,deleteComment)
router.put('/like/:id',protect,likePost)
router.put('/unlike/:id',protect,unlikePost)

module.exports= router