// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var About = require('../components/Children/about'); 
var Games = require('../components/Children/games'); 


// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects About then show the appropriate component*/}
		<Route path='About' component={About} />

		{/* If user selects Game then show the appropriate component*/}
		<Route path='Games' component={Games} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={About} />
		
	</Route>


);