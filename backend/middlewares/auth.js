const jwt = require("jsonwebtoken");

const User = require("../models/user");
const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  // getting the token from the cookie
  const { token } = req.cookies;
  // checking if the cookie exist
  if (!token) {
    return next(new ErrorHandler("Login first to access this resource.", 401));
  }
  // verifying if the token is correct
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  next();
});

// Handling users roles... the admin is the only one allowed to post,update delete etc ..
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role}) is not allowed to acccess this resource`,
          403
        )
      );
    }
    next();
  };
};
