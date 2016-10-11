// Include React
var React = require('react');

var Child1 = React.createClass({

	render: function(){

		return(
			<div className="container mainContent">
				<h1 className="pageHeading">Hi, there</h1>
				<hr />
				
			    <p>Strange Galaxy is a small website where I put games I make. Well, <i>game</i> so far, technically.</p>
			    <br />
			    <p>Sign up to track your high scores against other players. Try to get to the top.</p>
			    <br />
			    <p>Have fun.</p>
			</div>
		)
	}
});

module.exports = Child1;
