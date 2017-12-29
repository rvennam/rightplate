const GetUserBadges = require('../GetUserBadges.js');
require('dotenv').config();

GetUserBadges
  .main({
    dbname: process.env.DB_BADGES,
    userID: '0',
    url: process.env.DB_URL,
  })
  .then((response) => {
    console.log(response);
  }).catch((e) => {
    console.log('Error!', e);
  });
