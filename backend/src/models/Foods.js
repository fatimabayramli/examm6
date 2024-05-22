const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
	image: String,
	title: String,
	content: String,
    price: String
})

module.exports = mongoose.model("Foods", foodSchema)