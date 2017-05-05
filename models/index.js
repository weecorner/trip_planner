const dbConnection = require('./db');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Place = require('./place');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: dbConnection,
  hotel: Hotel,
  restaurant: Restaurant,
  activity: Activity,
  place: Place
};
