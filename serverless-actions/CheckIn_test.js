const CheckIn = require('./CheckIn.js');
require('dotenv').config();

CheckIn
  .main({
    dbname: process.env.DB_BADGES, url: process.env.DB_URL, userID: '0', name: 'YMCA',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log('Error!', e);
  });
