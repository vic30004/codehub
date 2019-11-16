const express = require('express');
const { protect } = require('../../middleware/auth');
const {
  getProfile,
  updateProfile,
  getAllProfiles,
  getSingleProfile,
  deleteUser,
  addExperience,
  deleteExp,
  addEducation,
  deleteEdu,
  getGithub
} = require('../../controller/profile');
const router = express.Router();

router.get('/me', protect, getProfile);
router.post('/', protect, updateProfile);
router.get('/', getAllProfiles);
router.get('/user/:user_id', getSingleProfile);
router.delete('/', protect, deleteUser);
router.put('/experience',protect, addExperience );
router.delete('/experience/:exp_id',protect,deleteExp);
router.put('/education',protect, addEducation );
router.delete('/education/:edu_id',protect,deleteEdu);
router.get('/github/:username',getGithub)

module.exports = router;
