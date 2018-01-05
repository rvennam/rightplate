function main(message) {
  const {
    dbname,
    url,
    docId,
    docRev,
  } = message;


  if (!dbname) {
    return Promise.resolve({ body: 'dbname is required.' });
  }
  if (!docId) {
    return Promise.resolve({ body: 'docId is required.' });
  }
  if (!docRev) {
    return Promise.resolve({ body: 'docRev is required.' });
  }
  const cloudant = require('cloudant')({ url });

  if (typeof cloudant !== 'object') {
    return Promise.reject(cloudant);
  }
  const cloudantDb = cloudant.use(dbname);

  return destroy(cloudantDb, docId, docRev);
}


/**
 * Delete document by id and rev.
 */
function destroy(cloudantDb, docId, docRev) {
  return new Promise(((resolve, reject) => {
    cloudantDb
      .destroy(docId, docRev, (error, response) => {
        if (!error) {
          resolve(response);
        } else {
          console.error('error', error);
          reject(error);
        }
      });
  }));
}

exports.main = main;
