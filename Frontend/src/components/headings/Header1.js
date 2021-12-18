import React from 'react'
import Header2 from './Header2'
import './styles.css'
const header1 = () => {
  return (
    <header>
    <div className="header-top">
      <div className="container">
        <div className="row">
          {/* Begin Header Top Left Area */}
          <div className="col-lg-3 col-md-4">
            <div className="header-top-left">
              <ul className="phone-wrap">
                <li>
                  <span>Telephone Enquiry:</span>
                  <a href="#"><i className='fa fa-phone'></i> (+123) 123 321 345</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
            <div className="header-top-right">
              <ul className="ht-menu">
                {/* Begin Setting Area */}
                <li>
                  <div className="ht-setting-trigger">
                    <span>Setting</span>
                  </div>
                  <div className="setting ht-setting">
                  </div>
                </li>
                {/* Setting Area End Here */}
                {/* Begin Currency Area */}
                <li>
                  <span className="currency-selector-wrapper">
                    Currency :
                  </span>
                  <div className="ht-currency-trigger">
                    <span>USD $</span>
                  </div>
                  
                </li>
                {/* Currency Area End Here */}
                {/* Begin Language Area */}
                <li>
                  <span className="language-selector-wrapper">
                    Language :
                  </span>
                  <div className="ht-language-trigger">
                    <span>English</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="mobile-menu-area d-lg-none d-xl-none col-12">
      <div className="container">
        <div className="row">
          <div className="mobile-menu"></div>
        </div>
      </div>
      <Header2/>
    </div>
  </header> 
  )
}

export default header1
