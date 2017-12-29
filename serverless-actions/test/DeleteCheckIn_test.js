const DeleteCheckIn = require('../DeleteCheckIn.js');
require('dotenv').config();

DeleteCheckIn
  .main({
    dbname: process.env.DB_BADGES,
    url: process.env.DB_URL,
    docId: 'e7dd74a2eb8ee5bb353cb057a6866b51',
    docRev: '1-367b0a1084c4d4c101ade8b938d90434',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log('Error!', e);
  });
