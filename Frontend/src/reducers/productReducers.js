
import {ALL_PRODUCTS_SUCCESS,
     ALL_PRODUCTS_REQUEST,
      ALL_PRODUCTS_FAIL,
      CLEAR_ERRORS,
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL,
      NEW_REVIEW_REQUEST,
      NEW_REVIEW_SUCCESS,
      NEW_REVIEW_RESET,
      NEW_REVIEW_FAIL,

      ADMIN_PRODUCTS_REQUEST,
      ADMIN_PRODUCTS_SUCCESS,
      ADMIN_PRODUCTS_FAIL,
      NEW_PRODUCT_SUCCESS, 
      NEW_PRODUCT_FAIL,
      NEW_PRODUCT_RESET,
      NEW_PRODUCT_REQUEST,

      DELETE_PRODUCT_REQUEST,
      DELETE_PRODUCT_SUCCESS,
      DELETE_PRODUCT_RESET,
      DELETE_PRODUCT_FAIL,
      UPDATE_PRODUCT_SUCCESS,
      UPDATE_PRODUCT_FAIL,
      UPDATE_PRODUCT_REQUEST,
      UPDATE_PRODUCT_RESET,
      GET_REVIEWS_REQUEST,
      GET_REVIEWS_SUCCESS,
      GET_REVIEWS_FAIL,
      DELETE_REVIEW_REQUEST,
      DELETE_REVIEW_SUCCESS,
      DELETE_REVIEW_FAIL,
      DELETE_REVIEW_RESET,
      ALL_REVIEWS_REQUEST,
      ALL_REVIEWS_SUCCESS,
      ALL_REVIEWS_FAIL,
      FEATURED_PRODUCTS_REQUEST,
      FEATURED_PRODUCTS_SUCCESS,
      FEATURED_PRODUCTS_FAIL,
      ADVERTISE_PRODUCTS_REQUEST,
      ADVERTISE_PRODUCTS_SUCCESS,
      ADVERTISE_PRODUCTS_FAIL,
    } from '../constants/productContants'



export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST: 
        case ADMIN_PRODUCTS_REQUEST:   
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }

        case ADMIN_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }

        case ALL_PRODUCTS_FAIL:
        case ADMIN_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

// GET FEATURED PRODUCTS
// getting the reviews in the admin dashboard
export const featuredProductReducer = (state = { product: [] }, action) => {
    switch (action.type) {

        case FEATURED_PRODUCTS_REQUEST:   
            return {
               
                loading: true,
                product: []
            }

        case FEATURED_PRODUCTS_SUCCESS:
     
            return {
                loading: false,
                product: action.payload.product
            }

        case FEATURED_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
export const advertiseProductReducer = (state = { product: [] }, action) => {
    switch (action.type) {

        case ADVERTISE_PRODUCTS_REQUEST:   
            return {
               
                loading: true,
                product: []
            }

        case ADVERTISE_PRODUCTS_SUCCESS:
     
            return {
                loading: false,
                product: action.payload.product
            }

        case ADVERTISE_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



// ADMIN CREATE NEW PRODUCT PRODUCT
export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {

        case NEW_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product
            }

        case NEW_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_PRODUCT_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

//admin delete and update products
export const deleteUpdateproductReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_PRODUCT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_PRODUCT_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


// getting the reviews in the admin dashboard
export const productReviewsReducer = (state = { review: [] }, action) => {
    switch (action.type) {

        case GET_REVIEWS_REQUEST:
       
            return {
                ...state,
                loading: true
            }

        case GET_REVIEWS_SUCCESS:
       
            return {
                loading: false,
                reviews: action.payload
            }

        case GET_REVIEWS_FAIL:
        
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

// get all the reviews 
export const getAllReviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {

       
        case ALL_REVIEWS_REQUEST:    
            return {
                
                loading: true,
                reviews :[]
            }

       
        case ALL_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload.reviews
            }

      
        case ALL_REVIEWS_FAIL:    
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

// admin delte review
export const deleteReviewReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
