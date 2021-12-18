import React from 'react'
import "../../App.css";
import FooterBrand from './FooterBrand';
import {Link} from 'react-scroll'
const NewsLetter = () => {
    return (
        <div>
          <FooterBrand/>

          <div className='activediv'>
            <Link to='featuredproduct'
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
             
              ignoreCancelEvents={false}>Home  <i class="fa fa-arrow-circle-up"></i></Link>
          </div>

      <div className="newsletter-section" style={{backgroundColor: ' #111', height: 100}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
            
              <div className="section-title" >
              
                <h2 className="subtitle" style={{marginTop: 20, textAlign: 'center', fontSize:20}}>Subscribe To Get Updates</h2>
              </div>
              
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <form className="newsletter-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Enter Your Mail" />
                </div>
                <button type="submit" className="btn mybtn2" style={{backgroundColor: ' #fa9c23', color: '#fff'}}>
                  <span> Subscribe</span>
                  <i className="fa fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> 
  
        </div>
    )
}

export default NewsLetter
