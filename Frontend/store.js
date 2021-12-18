// setting up the redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
  getAllReviewsReducer,

  newProductReducer,
  deleteUpdateproductReducer,
  productReviewsReducer,
  deleteReviewReducer,
  featuredProductReducer,
  advertiseProductReducer
} from "./reducers/productReducers";
import { authReducer,  updateUserProfileReducer,forgotPasswordReducer,allUsersReducer, userDetailsReducer} from './reducers/userReducer'
import {cartReducer} from './reducers/cartReducer'
import { newOrderReducer, myOrdersReducer,orderDetailsReducer, allOrdersReducer,updateDeleteOrderReducer} from './reducers/orderReducer'


const reducer = combineReducers({
  products: productsReducer,
  featured: featuredProductReducer,
  productDetails: productDetailsReducer,
  advertise: advertiseProductReducer,
  auth: authReducer,
  updateUserProfile:  updateUserProfileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders:  myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  allReviews: getAllReviewsReducer,
  newProduct: newProductReducer,

  adminProduct: deleteUpdateproductReducer,
  allOrders: allOrdersReducer,
  order: updateDeleteOrderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: deleteReviewReducer,
  
  
});

//this contain all the data you want to put in the state before loading the app eg the cart item
let initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    shippingInfo: localStorage.getItem('shippingInfo')
        ? JSON.parse(localStorage.getItem('shippingInfo'))
        : {}
}
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
