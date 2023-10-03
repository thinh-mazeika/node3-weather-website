const request = require("postman-request");

const baseUrl =
  "http://api.weatherstack.com/current?access_key=347fd0ebb063f105469cf510abd9b811";

function forecast(location, callback) {
  if (!location) {
    return callback("Please provide a location", undefined);
  }
  const url = `${baseUrl}&query=${location}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { temperature, feelslike } = body.current;
      const forecastMessage = `It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`;
      callback(undefined, forecastMessage);
    }
  });
}

module.exports = forecast;
