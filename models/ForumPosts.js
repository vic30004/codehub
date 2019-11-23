const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ForumSchema = new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },

    post:{
        type:String,
        required: [true, 'Please add a post']
    },

    name: {
        type: String
      },
      avatar: {
        type: String
      },
      
      likes: [
          {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
          }
           } ],
      comments:[{
        user:{
            type: Schema.Types.ObjectId,
                ref: 'users'
        },
        avatar:{
            type:String
        },
        name:{
            type:String
        },
        post:{
            type:String,
            require:[true,'Please add a comment']
        },
        date:{
            type:Date,
            default: Date.now()
        }

      }],

      date : {
          type:Date,
          default: Date.now()
      }
      
})




module.exports = ForumSchema