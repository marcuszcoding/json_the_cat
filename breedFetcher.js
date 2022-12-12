const request = require('request');

const breedFetcher = function(URL, cb) {
  request(URL, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return cb(error, null);
    }
    const data = JSON.parse(body);
    if (!data || !data.length) {
      return cb("No breed was found", null);
    }
    if (!data[0].description) {
      return cb("No description for this breed", null);
    }
    return cb(null, data[0].description);
  });
};
module.exports = breedFetcher;