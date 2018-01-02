const request = require('request').defaults({ encoding: null });


function main(params) {
  const { googleKey, latitude, longitude } = params;
  return new Promise(((resolve) => {
    const options = {
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/staticmap',
      qs: {
        key: googleKey,
        markers: `${latitude},${longitude}`,
        zoom: '17',
        size: '300x150',
      },
    };

    request(options, (error, response, body) => {
      resolve({
        headers: { 'Content-Type': 'image/png' },
        statusCode: 200,
        body: new Buffer(body).toString('base64'),
      });
    });
  }));
}

exports.main = main;
