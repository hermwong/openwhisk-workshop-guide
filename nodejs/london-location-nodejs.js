var request = require('request');

function main(params) {
  var location = 'London';
  var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + location;

  return new Promise(function(resolve, reject) {
    request.get(url, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        var results = JSON.parse(body).results[0].geometry.location;
        resolve(results);
      }
    });
  });
}
