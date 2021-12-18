import { BrowserRouter as Router, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
// import { useSelector } from 'react-redux'
// Payment imports 
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails'
import ContactUs from './components/contactUs/ContactUs'

// auth users impport 
import Login from'./components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePasssword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

// cart inport
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'

import OrderSuccess from './components/cart/OrderSucess'
import OrderDetails from './components/order/OrderDetails'
import ListOrder from './components/order/ListOrder'

//admin import 
import Dashboard from './components/admin/Dashboard'
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import Orderlist from './components/admin/OrderList'
import ProcessOrder from './components/admin/ProcessOrder'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'
import ProductReviews from './components/admin/ProductReviews'



// protect route import 
import ProtectedRoute from './components/route/ProtectedRoute'


import {loadUser} from './actions/userAction'
import store from './store'
// import Testimonial from './components/product/Testimonial'
import FeaturedProducts from './components/product/FeaturedProducts'




function App() {
  
  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey)
    }
    getStripApiKey();
  }, [])
  // const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <Router>
    <div className="App">
    <Header/>
    <Route path="/search/:keyword" component={Home} />
    <Route path="/" component={Home} exact/>
    <div className='container container-fluid'>

    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <ProtectedRoute path="/me" component={Profile} exact />
    <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
    <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
    <Route path="/password/reset/:token" component={NewPassword} exact />

    <Route path="/password/forgot" component={ForgotPassword} exact />
   
    <Route path="/cart" component={Cart} exact/>
    <Route path="/shipping" component={Shipping} exact/>
    <Route path="/product/:id" component={ProductDetails} exact/>
    <Route path="/contact" component={ContactUs} exact/>
    <Route path="/featuredproduct" component={FeaturedProducts} exact/>


    <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
    <ProtectedRoute path="/success" component={OrderSuccess} exact />
    <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
    <ProtectedRoute path="/orders/me" component={ListOrder} exact />


    {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute path="/payment" component={Payment} />
            </Elements>
          }



    </div>
    <ProtectedRoute path="/dashboard" isAmin={true} component={Dashboard} exact />
    <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact />
    <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />
    <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact />
    <ProtectedRoute path="/admin/orders/" isAdmin={true} component={Orderlist} exact />
    <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />
    <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact />
    <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact />
    <ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} exact />
  
 
   
   
    </div>
    </Router>
  );
}

export default App;
