var React = require('react');

//stateless functional components because it only defines the render method and it doesnt handle any state
var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
        <li>
          <a href="https://foundation.zurb.com">Foundation</a> - CSS framework to style the webpage.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
