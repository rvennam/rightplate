/**
 * Gets the user profile from the DB when passed the userID (not the db _id).
 *
 *
 * @author Ram Vennam
 */

function getUserFromResultSet(resultSet) {
  return { body: resultSet.rows[0].value };
}

/**
 * Get view by design doc id and view name.
 */
function queryView(cloudantDb, userID) {
  return new Promise(((resolve, reject) => {
    cloudantDb.view('userByID', 'new-view', {
      key: userID,
    }, (error, response) => {
      if (!error) {
        resolve(getUserFromResultSet(response));
      } else {
        console.error('error', error);
        reject(error);
      }
    });
  }));
}

function main(message) {
  const { dbname, userID, url } = message;

  const params = {};

  if (!dbname) {
    return Promise.reject('dbname is required.');
  }
  if (!userID) {
    return Promise.reject('userID is required.');
  }
  const cloudant = require('cloudant')({ url });

  if (typeof cloudant !== 'object') {
    return Promise.reject(cloudant);
  }
  const cloudantDb = cloudant.use(dbname);

  return queryView(cloudantDb, userID);
}

exports.main = main;
