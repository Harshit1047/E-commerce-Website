import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "../App.css";

import { getProducts } from "../actions/productActions";

import Loader from "./layout/Loader";
import MetaData from "./layout/MetaData";
import Products from "./product/Products";

import FeaturedProducts from "./product/FeaturedProducts";
import Footer from "./layout/Footer";

import ProductAdvert from "./product/ProductAdvert";


import ContactGallery from "./contactUs/ContactGallery";
import ScrollUp from "./layout/ScrollUp";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match, review, review_id }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

  const alert = useAlert();
  const dispatch = useDispatch();

  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  const {
    loading,
    products,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, keyword, price, error, alert, currentPage, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Buy Best Products Online"} />
          {
          resultPerPage <= count  ? (
            <>
 
            <ProductAdvert/>
            <FeaturedProducts/>
            <ContactGallery/>
            <ScrollUp/>
            </>
           ):null
          }
         
         <div className='container-fluid' id="homie" style={{ backgroundColor: 'light', marginTop: -34, paddingLeft: 90, paddingRight: 90}}>
          <div className="products-section">
            <div>
            <div className="row justify-content-center">
            <div className="col-lg-7">
                 
                <div className="section-titlez">
                    <h1 className="titlez">Our Products</h1>
                    <h2 className="subtitle">We have lots of excellent and high quality products To make you feel confident</h2>
                </div>
               
            </div>
        </div>

              <div className="row">
                {keyword ? (
                  <>
                    <div className="col-6 col-md-3 mt-5 mb-5">
                      <div className="px-5">
                        <Range
                          marks={{
                            1: `$1`,
                            1000: `$1000`,
                          }}
                          min={1}
                          max={1000}
                          defaultValue={[1, 1000]}
                          tipFormatter={(value) => `$${value}`}
                          tipProps={{
                            placement: "top",
                            visible: true,
                          }}
                          value={price}
                          onChange={(price) => setPrice(price)}
                        />

                        <hr className="my-5" />

                        <div className="mt-5">
                          <h4 className="mb-3">Categories</h4>

                          <ul className="pl-0">
                            {categories.map((category) => (
                              <li
                                style={{
                                  cursor: "pointer",
                                  listStyleType: "none",
                                }}
                                key={category}
                                onClick={() => setCategory(category)}
                              >
                                {category}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <hr className="my-3" />

                        <div className="mt-5">
                          <h4 className="mb-3">Ratings</h4>

                          <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <li
                                style={{
                                  cursor: "pointer",
                                  listStyleType: "none",
                                }}
                                key={star}
                                onClick={() => setRating(star)}
                              >
                                <div className="rating-outer">
                                  <div
                                    className="rating-inner"
                                    style={{
                                      width: `${star * 20}%`,
                                    }}
                                  ></div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-9">
                      <div className="row">
                        {products &&
                          products.map((product) => (
                            <Products
                              key={product._id}
                              product={product}
                              col={3}
                            />
                          ))}
                      </div>
                    </div>
                  </>
                ) : (
                  
                  products &&
                  products.map((product) => (
                    <Products key={product._id} product={product} col={2} />
                  ))
                 
                
                )}
                 
              </div>
            </div>
          </div>

          {resultPerPage <= count && (
            <div className="d-flex justify-content-center" style={{marginTop: 20}}>
              <Pagination 
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
                
              />
            </div>
          )}
          
          </div>
        
          <Footer />
       
        </>
      )}
      
    </>
  );
};

export default Home;
