const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const contactForm = require('../models/contactForm.js');

const router = express.Router();
/*
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../views/index.html'))
});*/

router.get('/info', function(req,res){
	res.sendFile(path.join(__dirname, '../views/info.html'));
});

router.post('/contact/submit',function(req, res){
	let customer = new contactForm(req.body);

	customer.save(function(error,doc){
		if(error) {
			res.send(error);
		} else {
			res.send(doc);
		}
	});
});

module.exports = router;