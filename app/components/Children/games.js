// Include React
var React = require('react');

var Games = React.createClass({
	handleClick: function(){
		game.state.start('title');
	},

	render: function(){

		return( 
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-lg-offset-2 mainContent">
						<h1 className="pageHeading">Games</h1>
						<hr />

						<div className="row">
							<div className='col-lg-8 col-lg-offset-2 text-center'>
								<h2>Zemulon Alpha</h2>
								<button className="btn btn-info" data-toggle="modal" data-target=".gameAreaModal" onClick={this.handleClick}>
									<img src="./assets/gameicon.png" className="img-responsive" alt="Zemulon Alpha game logo" />
								</button>
								<p>

								<a href="#" className="gameLinks" data-toggle="modal" data-target=".scoreModal">Scores</a>
								</p>

								<div className="modal fade scoreModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
								  <div className="modal-dialog modal-lg" role="document">
								    <div className="modal-content modalPad modalContent">
								      <h1>High Scores</h1>
								      <hr />
								    	{this.props.highScores.map(function(highScore, i)
											{
												return <div><p><span>{i + 1}: </span>{highScore.username} {highScore.score}</p><br /></div>
											})}
					    			</div>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</div>


  

				
			</div>
		)
	}
});

module.exports = Games;






