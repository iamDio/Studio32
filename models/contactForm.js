const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ContactFormSchema = new Schema({
	//full name string
	fullname:{
		type: String,
		trim: true,
		required: true
	},
	date: {
		type:Date,
		required: true
	},
	venue: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		trim: true,
	},
	phone:{
		type: Number,
		required:true
	}
	additional:{
		type: String,
		trim: true
	}
});

let ContactFormModel = mongoose.model('contactForm', ContactFormSchema);

module.exports = ContactFormModel;
