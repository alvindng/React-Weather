var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return (
    <h3>It is {temp} in {location}</h3>
  );
};
//you can included destructured variables directly in the arguments of a function. it is the same as calling props.temp and props.location
module.exports = WeatherMessage;
