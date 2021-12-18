import React from 'react'
import Header3 from './Header3'
import './styles.css'

const Header2 = () => {
    return (
        <header>
      <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo pb-sm-30 pb-xs-30">
                <a href="index.html">
                  <img src="images/menu/logo/1.jpg" alt="" />
                </a>
              </div>
            </div>

            <div className="col-lg-9">
              <form action="#" className="hm-searchbox">
                <select className="nice-select select-search-category">
                  <option value={0}>All</option>
                  <option value={10}>Laptops</option>
                  <option value={17}>- - Prime Video</option>
                </select>
                <input type="text" placeholder="Enter your search key ..." />
                <button className="li-btn" type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>

              <div className="header-middle-right">
                <ul className="hm-menu">
                  <li className="hm-wishlist">
                    <a href="wishlist.html">
                      <span className="cart-item-count wishlist-item-count">
                        0
                      </span>
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>

                  <li className="hm-minicart">
                    <div className="hm-minicart-trigger">
                      <span className="item-icon" />
                      <span className="item-text">
                        $80.00
                        <span className="cart-item-count">2</span>
                      </span>
                    </div>
                    <span />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header3/>
    </header>
    )
}

export default Header2
