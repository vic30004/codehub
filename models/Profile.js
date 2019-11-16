const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //get id from user model
    ref: 'user' //referencing the user moder
  },
  company: {
    type: String
  },
  website: {
    type: String,
    match: [
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    ],
    trim: true
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: [true,'Status is required']
  },
  skills: {
    type: [String],
    required: [true,'Skills is required']
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: [true, `Title is required`]
      },
      company: {
        type: String,
        required: [true,`Company is required`]
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: [true,`From date is required`]
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: [true,`School is required`]
      },
      degree: {
        type: String,
        required: [true,'Degree is required']
      },
      fieldofStudy: {
        type: String,
        require: [true,'Field of study is required']
      },
      from: {
        type: Date,
        required: [true,'From date is required']
      },
      to: {
        type: Date,
        require: true
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkdin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
