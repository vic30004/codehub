const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/Users');
const Posts = require('../models/Posts');
const Profile = require('../models/Profile');

// @route    POST api/posts
// @des      Create a post
// @ access  Private

exports.createPosts = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');

  try {
    const newPost = new Post({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id
    });
    const post = await newPost.save();

    res.json(post);
  } catch (err) {
    console.log(err.message);
    return next(new ErrorResponse(err.message, 500));
  }
});

// @route    GET api/posts
// @des      GET all posts
// @ access  Public

exports.getAllPosts = asyncHandler(async (req, res, next) => {
  let query;

  // Copy query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach(param => delete reqQuery[param]);

  console.log(reqQuery);

  let queryStr = JSON.stringify(reqQuery);

  // create operators ($in)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  // Finding resource
  query = Posts.find(JSON.parse(queryStr)).sort({ date: -1 });

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query.select(fields);
  }

  // Sort

  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query.sort(sortBy);
  } else {
    query = query.sort('{-addOn}');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Posts.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // Executing query
  const posts = await query;

  // Pagination Result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.status(200).json({
    success: true,
    count: posts.length,
    pagination,
    data: posts
  });
});

// @route    GET api/posts/:id
// @des      GET a single Post
// @ access  Public

exports.getPost = asyncHandler(async (req, res, next) => {
  const posts = await Posts.findById(req.params.id);
  if (!posts) {
    return next(
      new ErrorResponse(`posts not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: posts });
});

// @desc       Delete Posts
// @route      delete /api/porfolio/posts/:id
// @access     Private
exports.deletePost = asyncHandler(async (req, res, next) => {
  const posts = await Posts.findByIdAndDelete(req.params.id);

  if (!posts) {
    res.status(404).json({
      success: false,
      data: {}
    });
  }

  // Make sure owner
  if (posts.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized ot delete this posts`,
        401
      )
    );
  }

  posts.remove();
  res.status(201).json({
    success: true,
    data: {}
  });
});

// @desc       PUT api/posts/like/:id
// @route      Like a post
// @access     Private

exports.likePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);

    // Check if posthas already been liked by user
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      msg = 'Post already liked';
      return next(new ErrorResponse(msg, 400));
    }
    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    return next(new ErrorResponse(err.message, 500));
  }
});
// @desc       PUT api/posts/like/:id
// @route      Like a post
// @access     Private

exports.unlikePost = asyncHandler(async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);

    // Check if posthas already been liked by user
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      msg = 'Post has not yet been liked';
      return next(new ErrorResponse(msg, 400));
    }

    // Get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json({
      data: {}
    });
  } catch (err) {
    return next(new ErrorResponse(err.message, 500));
  }
});

// @route    POST api/posts/comment/:id
// @des      Comment on a post
// @ access  Private

exports.comment = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    const post = await Post.findById(req.params.id);

    const newComment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id
    };

    post.comments.unshift(newComment);
    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.log(err.message);
    return next(new ErrorResponse(err.message, 500));
  }
});


// @route    Delete api/posts/comment/:id/:comment_id
// @des      Delete comment
// @ access  Private

exports.deleteComment = asyncHandler(async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment 
    const comment = post.comments.find(comment => comment.id=== req.params.comment_id);

    if(!comment){
        return next(
            new ErrorResponse(`Comment does not exist`, 404) 
          );
    }

    // Check user 

    if(comment.user.toString() !== req.user.id){
        return next(
            new ErrorResponse(`User not authorized`, 401) 
          );
    }

    const removeIndex = post.comments
      .map(comment => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments)
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err.message, 500));
  }
});
