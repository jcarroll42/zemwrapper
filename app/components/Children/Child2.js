// Include React
var React = require('react');

var Child2 = React.createClass({
	handleClick: function(){
		game.state.start('title');
	},

	render: function(){

		return( 
			<div className="container mainContent">
			<h1 className="pageHeading">Games</h1>
			<hr />
			<p>Zemulon Alpha</p>
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg" onClick={this.handleClick}>Large modal</button>

				<button className="btn btn-default" data-toggle="modal" data-target=".scoreModal">Scores</button>

				<div className="modal fade scoreModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
				  <div className="modal-dialog modal-lg" role="document">
				    <div className="modal-content modalPad modalContent">
				      <h1>High Scores</h1>
				    	{this.props.highScores.map(function(highScore, i)
							{
								return <div><p><span>{i + 1}. </span> {highScore.score} {highScore.username}</p><br /></div>
							})}
	    			</div>
				  </div>
				</div>


  

				
			</div>
		)
	}
});

module.exports = Child2;






