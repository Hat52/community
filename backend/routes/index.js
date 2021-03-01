

function routes(app){
    app.use('/users',require('./authenticationRoutes'))
}

module.exports = routes