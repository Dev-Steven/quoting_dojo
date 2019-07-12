const mongoose = require("mongoose");

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, maxlength: 20},
},{timestamps:true});
mongoose.model('Quote', QuoteSchema); // Setting this Schema in our Models as 'User'
