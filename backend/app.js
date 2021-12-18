const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const errorMiddleware = require('./middlewares/errrors')
const path = require('path')
// const dotenv = require('dotenv')

//setting up config file
// dotenv.config({path: 'backend/config/config.env'})
//setting up config file

if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());



// import all route
const products = require('./routes/productRoute')
const autUser = require('./routes/userAuthRoute')
const order = require('./routes/orderRoute')
const payment = require('./routes/paymentRoute');

// hiting the route and this will be created as a collection in the DB 
app.use('/api/v1', autUser)
app.use('/api/v1', order)
app.use('/api/v1', products)
app.use('/api/v1', payment)

// deploying the app 
if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}



//middleware to handle error 
app.use(errorMiddleware)

// this module export will be usesd in our entry point (server.js)
module.exports = app 