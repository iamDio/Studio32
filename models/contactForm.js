const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ContactFormSchema = new Schema({
	name: {
		type: String,
		trim: true
	},

	eventDate: {
		type:Date
	},

	venue: {
		type: String,
		trim: true
	},

	email: {
		type: String,
		trim: true
	},

	phoneNumber:{
		type: String
	},

	message:{
		type: String,
		trim: true
	}

});

let ContactFormModel = mongoose.model('contactForm', ContactFormSchema);

module.exports = ContactFormModel;
