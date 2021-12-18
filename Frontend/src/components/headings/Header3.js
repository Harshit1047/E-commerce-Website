import React from 'react'
import './styles.css'
const Header3 = () => {
    return (
        <div className="header-bottom header-sticky stick d-none d-lg-block d-xl-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              
              <div className="hb-menu hb-menu-2">
                <nav>
                  <ul>
                    <li className="dropdown-holder"><a href="index.html">Home</a>
                      <ul className="hb-dropdown">
                        <li><a href="index.html">Home One</a></li>
                        <li><a href="index-2.html">Home Two</a></li>
                        <li className="active"><a href="index-3.html">Home Three</a></li>
                        <li><a href="index-4.html">Home Four</a></li>
                      </ul>
                    </li>
                    <li className="megamenu-holder"><a href="shop-left-sidebar.html">Shop</a>
                      <ul className="megamenu hb-megamenu">
                        <li><a href="shop-left-sidebar.html">Shop Page Layout</a>
                          <ul>
                            <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                            <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                            <li><a href="shop-list.html">Shop List</a></li>
                            <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                            <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li><a href="single-product-gallery-left.html">Single Product Style</a>
                          <ul>
                            <li><a href="single-product-carousel.html">Single Product Carousel</a></li>
                            <li><a href="single-product-gallery-left.html">Single Product Gallery Left</a></li>
                            <li><a href="single-product-gallery-right.html">Single Product Gallery Right</a></li>
                            <li><a href="single-product-tab-style-top.html">Single Product Tab Style Top</a></li>
                            <li><a href="single-product-tab-style-left.html">Single Product Tab Style Left</a></li>
                            <li><a href="single-product-tab-style-right.html">Single Product Tab Style Right</a></li>
                          </ul>
                        </li>
                        <li><a href="single-product.html">Single Products</a>
                          <ul>
                            <li><a href="single-product.html">Single Product</a></li>
                            <li><a href="single-product-sale.html">Single Product Sale</a></li>
                            <li><a href="single-product-group.html">Single Product Group</a></li>
                            <li><a href="single-product-normal.html">Single Product Normal</a></li>
                            <li><a href="single-product-affiliate.html">Single Product Affiliate</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-holder"><a href="blog-left-sidebar.html">Blog</a>
                      <ul className="hb-dropdown">
                        <li className="sub-dropdown-holder"><a href="blog-left-sidebar.html">Blog Grid View</a>
                          <ul className="hb-dropdown hb-sub-dropdown">
                            <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                            <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                            <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="sub-dropdown-holder"><a href="blog-list-left-sidebar.html">Blog List View</a>
                          <ul className="hb-dropdown hb-sub-dropdown">
                            <li><a href="blog-list.html">Blog List</a></li>
                            <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                            <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="sub-dropdown-holder"><a href="blog-details-left-sidebar.html">Blog Details</a>
                          <ul className="hb-dropdown hb-sub-dropdown">
                            <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="sub-dropdown-holder"><a href="blog-gallery-format.html">Blog Format</a>
                          <ul className="hb-dropdown hb-sub-dropdown">
                            <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                            <li><a href="blog-video-format.html">Blog Video Format</a></li>
                            <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="megamenu-static-holder"><a href="index.html">Pages</a>
                      <ul className="megamenu hb-megamenu">
                        <li><a href="blog-left-sidebar.html">Blog Layouts</a>
                          <ul>
                            <li><a href="blog-2-column.html">Blog 2 Column</a></li>
                            <li><a href="blog-3-column.html">Blog 3 Column</a></li>
                            <li><a href="blog-left-sidebar.html">Grid Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Grid Right Sidebar</a></li>
                            <li><a href="blog-list.html">Blog List</a></li>
                            <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                            <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li><a href="blog-details-left-sidebar.html">Blog Details Pages</a>
                          <ul>
                            <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="blog-audio-format.html">Blog Audio Format</a></li>
                            <li><a href="blog-video-format.html">Blog Video Format</a></li>
                            <li><a href="blog-gallery-format.html">Blog Gallery Format</a></li>
                          </ul>
                        </li>
                        <li><a href="index.html">Other Pages</a>
                          <ul>
                            <li><a href="login-register.html">My Account</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="compare.html">Compare</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="shopping-cart.html">Shopping Cart</a></li>
                          </ul>
                        </li>
                        <li><a href="index.html">Other Pages 2</a>
                          <ul>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="404.html">404 Error</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  
                    <li className="hb-info f-right p-0 d-sm-none d-lg-block">
                      <span>6688 London, Greater London BAS 23JK, UK</span>
                    </li>
                   
                  </ul>
                </nav>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header3
