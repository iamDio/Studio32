const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const contactForm = require('./models/contactForm.js');
const routes = require('./routes/routes');

mongoose.Promise = Promise;

const app = express();


const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static(__dirname + "/views"));

app.use('/', routes)

let MONGODB_URI = "mongodb://heroku_xqz9wxc0:qweasd123@ds129315.mlab.com:29315/heroku_xqz9wxc0";

let uristring = 
	process.env.MONGODB_URI||'mongodb://localhost/Studio32';

mongoose.connect(uristring, function(err, res){
	if(err){
		console.log(`ERROR CONNECTION TO ${uristring} ${err}`);
	}else {
		console.log(`Succesfully connected to: ${uristring}`);
	}
});

let db = mongoose.connection;

db.on('error',function(error){
	console.log(`Mongoose connection error ${error}`);
});

db.once('open',function(){
	console.log(`Mongoose connection successful`);
});

app.listen(PORT, function(){
	console.log(`app listening on PORT ${PORT}`);
})