const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=cb454565b2f93aad07c38d990bfd1a3e&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find the location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " .It is currently " +
          body.current.temperature +
          " degress out. This feels like " +
          body.current.feelslike +
          " degrees out." +
          " The humidity is " +
          body.current.humidity
      );
    }
  });
};

module.exports = forecast;
