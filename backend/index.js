
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const errorHandler = require('./authentication/_helpers/error-handler');
var app = express();
var routes = require('./routes')
// authentication ends here *****************************
mongoose.set( 'useUnifiedTopology', true );
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser',true )
mongoose.connect('mongodb://localhost/CommunityApp');
mongoose.connection.on("error",( )=> {
    console.log("Error occured");
});
mongoose.connection.on("open",( )=> {
    console.log("Connected");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

routes(app)

app.use(errorHandler);
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});