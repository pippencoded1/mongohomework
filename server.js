var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//express router setup
var router = express.Router();

var PORT= process.env.PORT || 3000;
app.use(router);

require("../WebScraper/config/routes")(router);

app.use(express.static(__dirname + "../public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//connect handlebars to express app
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//connect 
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
//connect mongoose to my db
mongoose.connect(db, function(error){
    //log errors 
    if (error){
        console.log(error);
    }
    //or log successful connection
    else {
        console.log("Mongoose connection works");
    }
})

app.listen(PORT, function(){
    console.log("listening on port:"+ PORT);
});