const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let houseSchema = Schema({
  name: {type: String, required: true},
  location: String,
  price: {type: Number, required: true},
  description: String,
  latitude: Number,
  longitude: Number,
  image: String,
  slug: String
}, {
  timestamps: true
})

var house = mongoose.model('house', houseSchema );

module.exports = house
