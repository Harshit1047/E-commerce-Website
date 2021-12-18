
const mongoose = require('mongoose')
const colors = require('colors')

const connectDatabase = async () => {
    try {
        const con= await mongoose.connect(process.env.DB_URI, {

            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true

        })
        console.log(` Mongo Db Connected ${con.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDatabase