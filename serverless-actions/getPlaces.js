const request = require('request');
// const sampleResponse = [
// ];

// function mainSample() {
//   return {
//     statusCode: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: sampleResponse,
//   };
// }
function main(params) {
  const { googleKey, latitude, longitude } = params;
  return new Promise(((resolve) => {
    const options = {
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      qs: {
        key: googleKey,
        location: `${latitude}, ${longitude}`,
        radius: '100',
        type: 'restaurant',
      },
    };

    request(options, (error, response, body) => {
      resolve({
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON
          .parse(body)
          .results,
      });
    });
  }));
}

exports.main = main;
