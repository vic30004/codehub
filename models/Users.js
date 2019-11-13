const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name'],
    },
    email:{
        type:String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required:true,
        unique: true
    },
    password: {
        type:String,
        require: [true,'Please add a password'],
        minlength: 6,
        select:false
    },
    avatar: {
        type:String
    },
    role: {
        type:String,
        enum: ['developer','recruiter'],
        default: 'developer'
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
    resetPasswordToken:String,
    resetPassowrd: Date,
  
});

module.exports = User = mongoose.model('user',UserSchema)