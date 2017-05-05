const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Place = dbConnection.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE),
    allowNull: false,
  },
});


//
// latitude: {
//   type: Sequelize.INTEGER,
//   allowNull: true,
//   defaultValue: null,
//   validate: { min: -90, max: 90 }
// },
// longitude: {
//   type: Sequelize.INTEGER,
//   allowNull: true,
//   defaultValue: null,
//   validate: { min: -180, max: 180 }
// },
// }, {
// validate: {
//   bothCoordsOrNone: function() {
//     if ((this.latitude === null) !== (this.longitude === null)) {
//       throw new Error('Require either both latitude and longitude or neither')
//     }
//   }
// }
// })

module.exports = Place;
