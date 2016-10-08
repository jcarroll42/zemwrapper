// Include React 
var React = require('react');

var helpers = require('./utils/helpers');


var Main = React.createClass({

	getInitialState: function(){
		that = this;
		return {
			userID: "",
			highScores:"",
			gameCount: 0
		}
	},

	setID: function(id){
		this.setState({
			userID: id
		})
	},
	setGameCount: function(count){
		this.setState({
			gameCount: this.state.gameCount + count 
		})
	},

	componentDidUpdate: function(prevProps, prevState){

		if(prevState.gameCount != this.state.gameCount){
			console.log("UPDATED");

			// Run the query for the address
			helpers.getHighScores()
				.then(function(response){
						console.log("current scores", this.state.highScores);
					if (response.data !== this.state.highScores)
					{
						console.log ("highScores", response.data);

						this.setState({
							highScores: response.data
						})

						// After we've received the result... then post the search term to our history. 
						 
						
					}
				}.bind(this))
			}
				
	},

	componentDidMount: function(){
		//that = this;
		// Get the latest history.
		helpers.getHighScores()
			.then(function(response){
				if (response != this.state.highScores){
					console.log ("highScores", response.data);

					this.setState({
						highScores: response.data
					})
				}
			}.bind(this))
	},
	// Here we render the function
	render: function(){
		var childrenWithProps = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, {setID: that.setID, highScores: that.state.highScores});
        });

		return(
		<div className="container-fluid">
			<nav className="navbar navbar-inverse">
				<ul className="nav navbar-nav navbar-right">
					<li><a href="#/Child1">Child 1</a></li>
					<li><a href="#/Child2">Child 2</a></li>
					<li><button className="btn btn-default" data-toggle="modal" data-target=".loginModal">Login</button></li>
					<li><button className="btn btn-default" data-toggle="modal" data-target=".signUpModal">Sign Up</button></li>
				</ul>
				
			</nav>

			<div className="modal fade loginModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			  <div className="modal-dialog modal-lg" role="document">
			    <div className="modal-content">
			      <h1>Login</h1>
			    
				    <form>
				        <div className="form-group">
				            <label>Username</label>
				            <input type="text" className="form-control" id="usernameInput" />
				        </div>
				        <div className="form-group">
				            <label>Password</label>
				            <input type="password" className="form-control" id="passwordInput" />
				        </div>

				        <button type="submit" className="btn btn-warning btn-lg" id='logMod'>Login</button>
				    </form>
			    </div>
			  </div>
			</div>

			<div className="modal fade signUpModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			  <div className="modal-dialog modal-lg" role="document">
			    <div className="modal-content">
			      <h1>Sign Up</h1>
			    
					<form>
				        <div className="form-group">
				            <label>Username</label>
				            <input type="text" className="form-control" id='usernameSignUpInput' />
				        </div>
				        <div className="form-group">
				            <label>Password</label>
				            <input type="password" className="form-control" id="passwordSignUpInput" />
				        </div>

		        <button type="submit" className="btn btn-warning btn-lg"  id='signMod'>Signup</button>
		    </form>

			    </div>
			  </div>
			</div>
			    

				<div className="row">
					
					{/*This code will dump the correct Child Component*/}
					{childrenWithProps}

				</div>

		</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;