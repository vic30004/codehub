const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name:{
        type:String,
        
        required:true,
        trim:true
    },
    email:{
        type:String,
        match: [
            /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
          ],
        required:true,
        unique: true
    },
    password: {
        type:String,
        require: true
    },
    avatar: {
        type:String
    },
    data: {
        type:Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user',UsersSchema)