/**
 * Create document in database.
 */
function insert(cloudantDb, doc, params) {
  return new Promise(((resolve) => {
    cloudantDb.insert(doc, params, (error, response) => {
      if (!error) {
        console.log('success', response);
        resolve({ body: response });
      } else {
        console.log('error', error);
        resolve({ body: error });
      }
    });
  }));
}

function main(message) {
  const {
    dbname, url, userID, name, plate,
  } = message;

  const params = {};

  if (!dbname) {
    return Promise.resolve({ body: 'dbname is required.' });
  }
  if (!userID) {
    return Promise.resolve({ body: 'userID is required.' });
  }
  if (!name) {
    return Promise.resolve({ body: 'badge name is required.' });
  }
  const cloudant = require('cloudant')({ url });

  if (typeof cloudant !== 'object') {
    return Promise.reject(cloudant);
  }
  const cloudantDb = cloudant.use(dbname);

  const doc = {
    timestamp: (new Date()).getTime().toString(),
    userID,
    name,
    plate,
  };
  return insert(cloudantDb, doc, params);
}

exports.main = main;
