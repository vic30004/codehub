const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/Users');
const Forum = require ('../models/ForumPosts')


//@desc  get all posts
//@route GET api/comment
//@access Private

exports.getAllForums = asyncHandler(async (req, res, next) => {
    let query;
  
    // Copy query
    const reqQuery = await { ...req.query };
  
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit'];
  
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
  
    console.log(reqQuery);
  
    let queryStr = JSON.stringify(reqQuery);
  
    // create operators ($in)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
    // Finding resource
    query = Forum.find(JSON.parse(queryStr)).populate('user', [
      'name',
      'avatar'
    ]);
  
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
      query = query.sort('-addOn');
    }
  
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Forum.countDocuments();
  
    query = query.skip(startIndex).limit(limit);
  
    // Executing query
    const form = await query;
  
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
      count: form.length,
      pagination,
      data: form
    });
  });


// @Desc    Create a forum post
// @Route   POST api/form
// @Aceess  Private

exports.createForum = async function (req, res,next) {
    const user = await User.findById(req.user.id).select('-password')
     const {post,date}=req.body
     console.log(req.body)
    try {
        const dbModel = await Forum
            .create({
                author: req.user.id,
                post: post,
                name: user.name,
                avatar: user.avatar,
                date:date
            })

        res.json(dbModel)
    } catch (error) {
      console.log(error)
      next(
      )
        res.status(422).json(error.message)
    }
}

exports.addLike = asyncHandler(async (req, res, next) => {
  try {
    const form = await Forum.findById(req.params.id);

    // Check if posthas already been liked by user
    if (
      form.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      msg = 'Post already liked';
      return next(new ErrorResponse(msg, 400));
    }
    form.likes.unshift({ user: req.user.id });

    await form.save();

    res.send(true)
  } catch (err) {
    return next(new ErrorResponse(err.message, 500));
  }
});


// @route    POST api/forum/comment/:id
// @des      Comment on a forum
// @ access  Private

exports.addComment=async function (req, res) {
    try {
      const user = await User.findById(req.user.id).select('-password')
      const forum = await Forum.findById(req.params.id);

      
        const dbComment = await Comment.create({
            post: req.body.post,
            name: user.name,
            avatar: user.avatar,
            date:date,
            user: req.user.id
        });
        post.comments.unshift(dbComment);
    await forum.save();
            
        res.json(forum.comments)
    } catch (error) {
        res.status(500).json(error.message)
       
    }

  }




// module.exports = { 

//     findAll : async function(req,res) {
//     try {
//     const dbModel = await Post.find({}).populate("comments").sort({date:-1})
//     res.json(dbModel)
//     } catch(error){
//         res.status(422).json(error)
//     }

//   },

//     create: async function (req, res) {
//         try {
//             const dbModel = await Post
//                 .create({
//                     author: req.body.name,
//                     post: req.body.post,
//                     likes: 0
//                 })

//             res.json(dbModel)
//         } catch (error) {
//             res.status(422).json(error)
//         }
//     },

//     addComment: async function (req, res) {
//         try {
//             const dbComment = await Comment.create(req.body);
//             const dbPost = await Post.findOneAndUpdate({ _id: req.params.id },
//                 { $push: { comments: dbComment._id } },
//                 { new: true });
                
//             res.json(dbPost)
//         } catch (error) {
//             res.send(error)
//         }


//     },

//     deleteComment: async function (req, res) {
//         try {
//             await Comment.findOneAndDelete({ _id: req.params.id })
//             res.send(true)
//         } catch (err) {
//             res.json(err)
//         }
//     },


//     
// }

