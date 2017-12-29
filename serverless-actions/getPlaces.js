const request = require('request');

const sampleResponse = [
  {
    reference: 'CmRRAAAAQL2umPD379KrN4U1OzCqyqEcIj63l_rqEHhjyxpXrByPLrGXKNM49yVYqRqpWlfOKTJmjr0c' +
        'PDh3u8QE50QiWWWa2VAUqkO7-CTUcZ289BtRslA4H-AJcoa4-mQFZZmVEhDiE4-P1Vf5FGe-DSqoj-J5' +
        'GhSTUBwac1Y11mWFEIBxDFIyw-gW_Q',
    name: "Bruno's Pizza",
    scope: 'GOOGLE',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    price_level: 2,
    opening_hours: {
      open_now: true,
      weekday_text: [],
    },
    id: 'cd607161f2d09fdcba668c7651d004f3fc417a19',
    vicinity: '910 E Front Ave, Bismarck',
    rating: 4.3,
    types: [
      'restaurant', 'food', 'point_of_interest', 'establishment',
    ],
    geometry: {
      location: {
        lat: 46.804401,
        lng: -100.777786,
      },
      viewport: {
        northeast: {
          lat: 46.8057499802915,
          lng: -100.7764370197085,
        },
        southwest: {
          lat: 46.8030520197085,
          lng: -100.7791349802915,
        },
      },
    },
    place_id: 'ChIJaTcs6BeD11IRkKnRTHK0HQ4',
    photos: [
      {
        height: 608,
        html_attributions: ['<a href="https://maps.google.com/maps/contrib/116824398298487557228/photos">Br' +
            'uno&#39;s Pizza</a>'],
        photo_reference: 'CmRaAAAA52gwrtO6Ik4008nYv_qQx5Ny12jw21Ji4q1xt5E_yqd22g5GOvSTn5VUBM50E--IutuFFO2A' +
          'X_8VXzExwbf6LCpp7aFLweEXcA3Py9lUSiwlae6IWMVduh6gMwd4y9KwEhBO_-clCeiuQExPfPy3-f6X' +
          'GhQydEMMF0BZmzFkuBCP5feX3wFbaQ',
        width: 1080,
      },
    ],
  }, {
    reference: 'CmRSAAAARxwoLwVNHUjXh_UZyQL6_rt4LU30ZgHRohFm8urnnirGe61s_0-mzmM0g7RPjQnxQ5kRw80u' +
        'wwOObqxZIIPITteYNQUNcQe7HKY5YGxO-gGaob-X1HLgHs7fpxNLQiKCEhBOAc3_B5S6Cp9ItAlpcdFr' +
        'GhSoxxvkgj1c7pLAoUWUhl0p4VLeQQ',
    name: "McDonald's",
    scope: 'GOOGLE',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
    price_level: 1,
    opening_hours: {
      open_now: true,
      weekday_text: [],
    },
    id: 'ae7151b44bfd1ebdfae3d99db542007d9db7e2bc',
    vicinity: '605 East Main Avenue, Bismarck',
    rating: 3.7,
    types: [
      'cafe',
      'restaurant',
      'food',
      'store',
      'point_of_interest',
      'establishment',
    ],
    geometry: {
      location: {
        lat: 46.8051507,
        lng: -100.7821527,
      },
      viewport: {
        northeast: {
          lat: 46.8066190302915,
          lng: -100.7808004697085,
        },
        southwest: {
          lat: 46.8039210697085,
          lng: -100.7834984302915,
        },
      },
    },
    place_id: 'ChIJo4psZBaD11IRDv9TmeTdg6U',
    photos: [
      {
        height: 768,
        html_attributions: ['<a href="https://maps.google.com/maps/contrib/113463868239322631916/photos">Mc' +
            'Donald&#39;s</a>'],
        photo_reference: 'CmRaAAAANSmn2xvnhXX-ekk-l5oZ3pPyc03sKO5TzFJNpjl304Y8lpml1LcwMsadpvkekWeKimJl5iaN' +
          'Z5XxADPpwApbe0YeZJHTXai4utO2D1MArDxeviGyA9CniR-yUIaSHHjgEhCMtd-YjsTPFzRlWuH6NMLe' +
          'GhTMXS6lX_ZmvzmOrI3b0StMpx2SZQ',
        width: 1025,
      },
    ],
  },
];

function mainDev(params) {
  return new Promise(resolve => resolve({
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: sampleResponse,
  }));
}
function mainProd(params) {
  const { googleKey, latitude, longitude } = params;
  return new Promise(((resolve) => {
    const options = {
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      qs: {
        key: googleKey,
        location: `${latitude}, ${longitude}`,
        radius: '300',
        type: 'point_of_interest',
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

function main(params) {
  return params.prod ? mainProd(params) : mainDev(params);
}
exports.main = main;
