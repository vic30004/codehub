const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/Users');
const ForumPosts = require('../models/ForumPosts')


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
    query = ForumPosts.find(JSON.parse(queryStr)).populate('user', [
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
    const total = await ForumPosts.countDocuments();
  
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

exports.createForum = async function (req, res) {
    const user = await User.findById(req.user.id).select('-password')
     const {post,date}=req.body
    try {
        const dbModel = await Post
            .create({
                author: req.user.id,
                post: post,
                name: user.name,
                avatar: user.avatar,
                date:date
            })

        res.json(dbModel)
    } catch (error) {
        res.status(422).json(error)
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

//     addLike: async function (req,res){
//         try {
//             const upVote = await Post.findOneAndUpdate({_id:req.params.id},
//                 {$inc : { likes : 1}})
//                 res.json(upVote)
//         } catch (err){
//             res.json(err)
//         }
//     }
// }

