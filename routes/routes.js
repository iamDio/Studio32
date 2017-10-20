const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', function(req, res){
	res.render('index')
});

module.exports = router;