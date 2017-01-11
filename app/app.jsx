//state can be updated by components, props cannot. props are created whenever a component is initialized
//state is something a component can change and prop is something a component cannot change, but a parent can always update a child's props
//every React component needs a render method
//every React component should be responsible for one thing only - single responsiblity principle
//presentational components - visible to user and dont maintain state; takes props and renders something to the browser
//container components - maintain state and rerenders children when state is changed
//GreeterMessage and GreeterForm are presentational components
//removed dependencies from index.html so they must be required at the top

var React = require('react'); //needs to be imported from webpack
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //destructuring ES6 syntax - these are all separate methods for react-router
var Main = require('Main'); //make sure to set the Alias in webpack.config
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css') //set the style loader and css loader before the file path so that the file can load in a css file and read its styling format
$(document).foundation();

//when you have a parent component thats handling an event from the child you usually call the parent 'handle' followed by the name you chose and then you call it in the child with 'on' followed by the name you chose. ie onNewData (child) vs handleNewData (parent)

//App css
require('style!css!sass!applicationStyles') //three loaders

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='about' component={About} />
      <Route path='examples' component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
