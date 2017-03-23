var house = require('../models/houses')
var slug = require('slug')

var houses = {}

houses.getHouses = function (req,res,next) {
  house.find({}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

houses.getHouse = function (req,res,next) {
  house.find({slug:req.params.slug}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

houses.createHouse = function (req,res,next) {
  house.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    image: req.body.image,
    slug: slug(req.body.name).toLowerCase()
  }).then (function (data) {
    res.json(data)
  })
}

houses.updateHouse = function (req,res,next) {
  house.update({
    _id: req.params.id
  },{
    $set: req.body
  }).then(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

houses.deleteHouse = function (req,res,next) {
  house.find({_id:req.params._id}).remove(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json (`data id has been deleted`)
    }
  })
}

module.exports = houses
