const GetUser = require('../GetUser.js');
require('dotenv').config();

GetUser
  .main({
    dbname: process.env.DB_USERS,
    userID: '0',
    url: process.env.DB_URL,
  })
  .then((response) => {
    console.log(response);
  }).catch((e) => {
    console.log('Error!', e);
  });
