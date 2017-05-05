const dbConnection = require('./db');
const HotelModel = require('./hotel');
const RestaurantModel = require('./restaurant');
const ActivityModel = require('./activity');
const PlaceModel = require('./place');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: dbConnection,
  hotel: HotelModel,
  restaurant: RestaurantModel,
  activity: ActivityModel,
  place: PlaceModel
};