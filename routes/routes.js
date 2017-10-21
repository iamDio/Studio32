const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const contactForm = require('../models/contactForm.js');

const router = express.Router();

router.get('/', function(req, res){
	res.render('index')
});

router.post('/contact/submit',function(req, res){
	contactForm.create(req.body, function(result){
		res.render('GREAT SUCCESSSS');
	});
});

module.exports = router;