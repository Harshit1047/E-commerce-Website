import React from "react";
import '../../App.css';
import './Footer.css'
import './crimson.css'

import NewsLetter from "./NewsLetter";


const Footer = () => {
  return (
    <>
    <NewsLetter/>
    <div className='footer-top'>
    
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-bm-30' style={{marginTop : 10}}>
        
            <h3>About us</h3>
           
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sed do eiusmod tempor  sed do eiusmod tempor </p>
                <i className="fa fa-cc-mastercard" />
                <i className="fa fa-cc-paypal" />
                <i className="fa fa-cc-amex" />
                <i className="fa fa-cc-visa" />
                <i className="fa fa-cc-discover" />
          </div>
          <div className='col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-bm-30'  style={{marginTop : 10}}>
          <h2>About us</h2>
           <ul>
             <li><a href='http://localhost:4000/'>Event</a></li>
             <li><a href='http://localhost:4000/'>Sport</a></li>
             <li><a href='http://localhost:4000/'>New Arival</a></li>
             <li><a href='http://localhost:4000/'>blogs</a></li>
           </ul>
          </div>

          <div className='col-md-3 col-sm-6 col-xs-12 segment-three  sm-bm-30'  style={{marginTop : 10}}>
          <h2>Follow us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
              <a href="https://web.facebook.com/choc.prince.1"><i className="fa fa-facebook-square" /></a>
              <a href="https://www.instagram.com/instructor_ehizeex/"><i className="fa fa-google-plus-square" /></a>
              <a href="https://www.instagram.com/instructor_ehizeex/"><i className="fa fa-instagram" /></a>
              <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA"><i className="fa fa-youtube-square" /></a>
              <a href="https://twitter.com/Ehiedu_baba"><i className="fa fa-twitter" /></a>
          </div>

          <div className='col-md-3 col-sm-6 col-xs-12 segment-four sm-bm-30 '  style={{marginTop : 10}}>
          <h2>Our News Letter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          <img src="./images/rider.jpeg" alt='rider loading' style={{height: 100, width: 100, borderRadius:50}}/>
          </div>

        </div>
      </div>
   
    <p className='footer-bottom-text' style={{color: '#fff', fontFamily:'cursive', }}>All right reserved by &copy; Ehizeex Tech 2021</p> 
    </div>
    </>
  );
};

export default Footer;
