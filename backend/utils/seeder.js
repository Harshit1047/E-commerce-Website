const Product = require('../models/product')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')

//importing the products in the product.json file that we wanna puch to the database once 
const products = require('../data/product.json')

//setting dotenv file 
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedProducts = async () => {
    try {
        //deleting all the products (deleting the comlete collection) in the database first
        await Product.deleteMany();
        console.log('Products are deleted');
         //iinserting the products in the products.json file into the db after deleting all the products from the DB 
        await Product.insertMany(products)
        console.log('All Products are added.')
//after adding the products into the db, we  have to exit the process
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()

/// go and set the command to run this file inside the package.json 