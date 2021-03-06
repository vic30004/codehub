const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Profile = require('../models/Profile');
const User = require('../models/Users');
const config = require('config');
const request = require('request');

// @route    Get api/profile/me
// @des      Retrieves logged in users profile
// @ access  Private
exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id }).populate(
    'user',
    ['name', 'avatar']
  );

  if (!profile) {
    return next(new ErrorResponse(`There is no profile for this user`, 400));
  }
  res.status(200).json(profile);
});

// @route    POST api/profile
// @des      Create or update a user profile
// @ access  Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkdin
  } = req.body;
  // Build profile object

  const profileFields = {};
  profileFields.user = req.user.id;
  if (company) profileFields.company = company;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;
  if (githubusername) profileFields.githubusername = githubusername;

  if (skills) {
    profileFields.skills = skills.split(',').map(skills => skills.trim());
  }

  // Build social Object
  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (facebook) profileFields.social.facebook = facebook;
  if (twitter) profileFields.social.twitter = twitter;
  if (instagram) profileFields.social.instagram = instagram;
  if (linkdin) profileFields.social.linkdin = linkdin;
  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      //Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    //Create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// @route    GET api/profile
// @des      Get all profiles
// @ access  Public

exports.getAllProfiles = asyncHandler(async (req, res, next) => {
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
  query = Profile.find(JSON.parse(queryStr)).populate('user', [
    'name',
    'username',
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
  const total = await Profile.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // Executing query
  const profile = await query;

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
    count: profile.length,
    pagination,
    data: profile
  });
});

// @route    GET api/profile/user/:user_id
// @des      Get Profile by user ID
// @ access  Public

exports.getSingleProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.params.user_id
  }).populate('user', ['name', 'avatar']);
  console.log(req.params);
  if (!profile) {
    next(new ErrorResponse(`Profile doesn't exist`, 404));
  }
  res.status(200).json({ sucess: true, data: profile });
});

// @route    DELETE api/profile
// @des      DELETE Profile, user and posts
// @ access  PRIVATE

exports.deleteUser = asyncHandler(async (req, res, next) => {
  // Need to also add route to remove user posts

  // Remove Profile
  await Profile.findOneAndRemove({ user: req.user.id });

  // Remove User
  await User.findOneAndRemove({ _id: req.user.id });

  res.json({ msg: 'User deleted' });
});

// @route    PUT api/profile/experience
// @des      Add profile experience
// @ access  PRIVATE

exports.addExperience = asyncHandler(async (req, res, next) => {
  const { title, company, location, from, to, current, description } = req.body;

  const newExp = {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  };

  const profile = await Profile.findOne({ user: req.user.id });

  profile.experience.unshift(newExp);
  profile.save();

  res.json({ success: true, data: profile });
});

// @route    DELETE api/profile/experience/:exp_id
// @des      DELETE experience from profile
// @ access  PRIVATE

exports.deleteExp = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id });

  // Get the remove index
  const removeIndex = profile.experience
    .map(item => item.id)
    .indexOf(req.params.exp_id);

  profile.experience.splice(removeIndex, 1);

  await profile.save();

  res.json({ success: true, data: profile });
});

// @route    PUT api/profile/education
// @des      Add profile education
// @ access  PRIVATE

exports.addEducation = asyncHandler(async (req, res, next) => {
  const {
    school,
    degree,
    fieldofStudy,
    from,
    to,
    current,
    description
  } = req.body;

  const newEdu = {
    school,
    degree,
    fieldofStudy,
    from,
    to,
    current,
    description
  };

  const profile = await Profile.findOne({ user: req.user.id });

  profile.education.unshift(newEdu);
  profile.save();

  res.json({ success: true, data: profile });
});

// @route    DELETE api/profile/experience/:edu_id
// @des      DELETE experience from profile
// @ access  PRIVATE

exports.deleteEdu = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id });

  // Get the remove index
  const removeIndex = profile.education
    .map(item => item.id)
    .indexOf(req.params.edu_id);

  profile.education.splice(removeIndex, 1);

  await profile.save();

  res.json({ success: true, data: profile });
});

// @route    GET api/profile/github/:username
// @des      GET user repos from github
// @ access  Public
exports.getGithub = asyncHandler
  (async (req, res, next) => {
    try {
      const options = {
        uri: `https://api.github.com/users/${
          req.params.username
        }/repos?per_page=5&sort=created:asc&client_id=${config.get(
          'GITHUB_CLIENT_ID'
        )}$client_secret=${config.get('GITHUB_CLIENT_SECRET')}`,
        method:'GET',
        headers:{'user-agent':'node.js'}
      };

      request(options, (error,response,body)=>{
          if(error) console.log(error);

          if(response.statusCode!==200){
            return next(
                new ErrorResponse('No Github profile Found',404)
            )
          }
          res.json(JSON.parse(body))
      })
    } catch (err) {
      return new ErrorResponse(err.message, 500);
    }
  }
);
