const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updateProfile,
  updatePassword,
  fetchAlllUsers,
  getUserDetails,
  updateUser,
  deleteUser
} = require("../controllers/usersController");
const {isAuthenticatedUser, authorizeRoles} = require("../middlewares/auth")


//post request
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
//Put Request
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/userprofile/update").put(isAuthenticatedUser, updateProfile);
router.route("/admin/updateusers/:id").put(isAuthenticatedUser,  authorizeRoles('admin'), updateUser);
//Get Request
router.route("/logout").get(logout);
router.route("/userprofile").get(isAuthenticatedUser, getUserProfile);
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles('admin'), fetchAlllUsers);
router.route("/admin/users/:id").get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails);

//Delete user
router.route("/admin/users/delete/:id").delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

module.exports = router;

// go to the app.js and mount the route
