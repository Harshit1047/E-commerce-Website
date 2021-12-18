const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder
} = require("../controllers/orderController");

router.route('/orders/new').post(isAuthenticatedUser, newOrder);
router.route('/singleorder/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/myorders').get(isAuthenticatedUser, myOrders);
router.route('/admin/orders/').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);

router.route('/admin/order/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

module.exports = router;
// this export will make this to be seen so go to the app.js to mount this route there
