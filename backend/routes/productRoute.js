const express = require("express");
const router = express.Router();

const {isAuthenticatedUser, authorizeRoles, } = require('../middlewares/auth')
// exporting the controllers function for geting, deleting, updating etc
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
  getFeaturedProduct,
  getAdvertiseProduct
  
} = require("../controllers/productController");





//specifying the routes   
router.route("/products").get( getProducts);
router.route("/products/:id").get(getSingleProduct);
router.route("/products/featured/:count").get(getFeaturedProduct);
router.route("/products/advertise/:count").get(getAdvertiseProduct);
router.route('/admin/products').get(getAdminProducts);

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles('admin'),newProduct);
router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);
router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizeRoles('admin'),  deleteProduct);


router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/all/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)
module.exports = router;
