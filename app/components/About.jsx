var React = require('react');

//stateless functional components because it only defines the render method and it doesnt handle any state
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>About Page</p>
    </div>
  )
};

module.exports = About;
