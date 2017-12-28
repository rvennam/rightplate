/**
 * Gets the user badges from the DB when passed the userID (not the db _id).
 *
 *
 * @author Ram Vennam
 */

function getUserBadgesFromResultSet(resultSet) {
  const result = [];
  resultSet.rows.map(row => result.push(row.value));
  return { body: result };
}

/**
 * Get view by design doc id and view name.
 */
function queryView(cloudantDb, userID) {
  return new Promise(((resolve, reject) => {
    cloudantDb.view('badgesByUserID', 'new-view', {
      key: userID,
    }, (error, response) => {
      if (!error) {
        resolve(getUserBadgesFromResultSet(response));
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
