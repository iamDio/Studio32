const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log(`app listening on PORT ${PORT}`);
})