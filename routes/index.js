const router = require('express').Router();
const Hotel = require('../models').hotel;
const Restaurant = require('../models').restaurant;
const Activity = require('../models').activity;

//
// router.get('/', function(req, res, next) {
//   Hotel.findAll()
//   .then(allHotels => {
//     res.render('index', {hotels: allHotels});
//   }).catch(next)
//
//
//
//   Restaurant.findAll()
//   .then(allRestaurants => {
//     res.render('index', {restaurants: allRestaurants});
//   }).catch(next)
//
// })


router.get('/', function(req, res, next) {
  var outerScopeContainer = {};
  Hotel.findAll()
  .then(function (dbHotels) {
    outerScopeContainer.dbHotels = dbHotels;
    return Restaurant.findAll();
  })
  .then(function (dbRestaurants) {
    outerScopeContainer.dbRestaurants = dbRestaurants;
    return Activity.findAll();
  })
  .then(function (dbActivities) {
    res.render('index', {
      templateHotels: outerScopeContainer.dbHotels,
      templateRestaurants: outerScopeContainer.dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

module.exports = router;
