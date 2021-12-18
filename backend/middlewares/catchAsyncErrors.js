module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)

        //we can either resolve a promise or reject a promise