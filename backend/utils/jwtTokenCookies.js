// Create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {

    // get jwt token from the user 
    const token = user.getJwtToken();

    // Options for storing jwt in the cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true // make sure that here is http only. if not, it can also be access with java script code 
    }


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })

}

module.exports = sendToken;