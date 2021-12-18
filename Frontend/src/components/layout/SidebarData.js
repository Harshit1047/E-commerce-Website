import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import {Link} from 'react-router-dom'
import {  useSelector } from "react-redux";

const Item = () => {
    
    // const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart)

    return (
            <div className="col-12 col-md-3">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span id="cart" className="cart" style={{marginRight: -70}}>
              Cart
            </span>
            <span className="ml-1" id="cart_count">
             {cartItems.length}
            </span>
          </Link>
          </div>
    )
}

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        display:'',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    { 
        title: '',     
        path: '/cart',  
        display:<Item/>,  
        icon: <FaIcons.FaCartPlus/>,       
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        display:'',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        display:'',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/',
        display:'',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaEnvelope/>,
        cName: 'nav-text'
    },
]