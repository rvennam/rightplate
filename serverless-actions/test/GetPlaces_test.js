const GetPlaces = require('../GetPlaces.js');
require('dotenv').config();

GetPlaces
  .main({
    googleKey: process.env.GOOGLE_KEY,
    latitude: 46.806,
    longitude: -100.779,
  })
  .then((response) => {
    console.log(response);
  }).catch((e) => {
    console.log('Error!', e);
  });
