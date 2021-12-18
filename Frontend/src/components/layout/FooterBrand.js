import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const options = {
    loop:true,
    margin:0,
    
    animateOut: 'bouceOutRight',
    dots:true,
    autoplay:true,
    smartSpeed:1000,
    responsive: {
        0:{
            items:4
        },
        600:{
            items:6
        },
        1000:{
            items:10
        }
    },
};

const FooterBrand = () => {
      

    return (
        <section className="section brands">
      
       
        
          <div className="brand-layout container" style={{padding: 12, marginTop: 20}}>
            <div className="row">
            <OwlCarousel  {...options}>
                    <div className="col">
                  <img src="./images/brand1.png" alt=""  style={{height: 70, width: 70}}/>
                </div>
                <div className="col">
                  <img src="./images/brand2.png" alt="" style={{height: 70, width: 70}} />
                  </div>
                <div className="col"> 
                  <img src="./images/brand3.png" alt=""  style={{height: 70, width: 70}}/>
                  </div>
                <div className="col">
                  <img src="./images/brand4.png" alt=""  style={{height: 70, width: 70}}/>
                  </div>
                <div className="col">
                  <img src="./images/brand_8.png" alt=""  style={{height: 70, width: 70}}/>
                  </div>
                <div className="col">
                  <img src="./images/brand5.png" alt=""  style={{height: 70, width: 70}}/>
                  </div>
                <div className="col">
                  <img src="./images/brand6.png" alt="" style={{height: 70, width: 70}} />
                  </div>
                <div className="col">
                  <img src="./images/brand7.png" alt=""  style={{height: 70, width: 70}}/>
                </div>
               
                <div className="col">
                  <img src="./images/brand_12.png" alt=""  style={{height: 70, width: 70}}/>
                  </div>
                <div className="col">
                  <img src="./images/brand_10.png" alt=""  style={{height: 70, width: 70}}/>
                  </div>
             </OwlCarousel >
              </div>
              
              </div> 
      </section>
    )
}

export default FooterBrand

// i rendered thos component in the newslleter 