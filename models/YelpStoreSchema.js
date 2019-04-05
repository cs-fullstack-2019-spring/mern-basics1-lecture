var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var YelpStoreSchema = new Schema({
    name: String,
    address: String,
    priceRange: String, //with exclamation marks
    type: String,
    rating: Number,
});

//Export model
module.exports = mongoose.model('yelpReview', YelpStoreSchema);