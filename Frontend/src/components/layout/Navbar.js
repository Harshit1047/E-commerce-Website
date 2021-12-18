import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { useDispatch, useSelector } from "react-redux";

import { adevertiseProducts } from "../../actions/productActions";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  // we get the product to be rendered on the ui by grabbing the product fron the global state using useSelector
  const { product, error } = useSelector((state) => state.advertise);
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(adevertiseProducts());
  }, [dispatch, error]);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div onClick={showSidebar}>
      <li className="navbar-togglez">
       
          <Link to="/" className="menu-bars">
            <FaIcons.FaBars />
          </Link>
       
      </li>
      <div
      
        className="head"
        style={{ backgroundColor: "red", display: "column" }}
      >
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
             
                <Link to="#" className="menu-bars">
                  <AiIcons.AiFillCloseCircle />
                </Link>
             
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {item.display}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="head" style={{ display: "column", marginTop: 20 }}>
              <div className="container">
                {product &&
                  product.map((products) => (
                    <div className="col">
                        <Link to={`/product/${products._id}`}>
                      <img
                        src={products.images[0].url}
                        alt="Watch"
                        className="img-fluid"
                        style={{ height: 170, width: 180 }}
                      />
                        
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
