// Include React
var React = require('react');

var Child1 = React.createClass({

	render: function(){

		return(
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						Test content
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Child1;
