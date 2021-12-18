import React from 'react'
import { Link } from 'react-router-dom'

const ContactGallery = () => {
    return (
        <section className="gallery-block cardz-gallery">
        <div className="container-fulid" style={{backgroundColor: '#fa9c23', padding: 15, marginTop: -40}}>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="cardz border-0 transform-on-hover">
               <Link to='/contact'> <img src="https://gh.jumia.is/cms/2020/W42/DESK_1.jpg" alt='imagegalleryloading' className="card-img-top" /></Link>
              </div>
            </div>
       
            <div className="col-md-6 col-lg-6">
              <div className="cardz border-0 transform-on-hover">
                <img src="https://gh.jumia.is/cms/2021/W16/Banners/dESK---2021-04-19T053424.788.jpg" alt='imagegalleryloading' className="card-img-top" />
              </div>
            </div>
          </div>
        </div></section>
    )
}

export default ContactGallery
