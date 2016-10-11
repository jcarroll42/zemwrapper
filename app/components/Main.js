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

	handleClick: function(){
		helpers.logout().then(function(response){
				console.log(response.data);
				if (response != this.state.userID){
					this.setState({
						userID: response.data
					})
				}
			}.bind(this));

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

		if (prevState.userID != this.state.userID){
			console.log("USER ID UPDATED");

			helpers.getID()
			.then(function(response){
				console.log(response.data);
				if (response != this.state.userID){
					this.setState({
						userID: response.data
					})
				}
			}.bind(this));
		}
				
	},

	componentDidMount: function(){

		helpers.getID()
			.then(function(response){
				console.log(response.data);
				if (response != this.state.userID){
					this.setState({
						userID: response.data
					})
				}
			}.bind(this));
		
		helpers.getHighScores()
			.then(function(response){
				if (response.data != this.state.highScores){
					console.log ("highScores", response.data);

					this.setState({
						highScores: response.data
					})
				}
			}.bind(this));
	},

	render: function(){
		var loggedIn;

		if (this.state.userID === ""){
			loggedIn = <ul className="nav navbar-nav navbar-right">
					<li><a href="#/Child1">Child 1</a></li>
					<li><a href="#/Child2">Child 2</a></li>
					<li className="auth"><a href="#" data-toggle="modal" data-target=".loginModal">Login</a></li>
					<li className="auth"><a href="#" data-toggle="modal" data-target=".signUpModal">Sign Up</a></li>
					</ul>;
		}
		else {
			loggedIn = <ul className="nav navbar-nav navbar-right">
					<li><a href="#/Child1">Child 1</a></li>
					<li><a href="#/Child2">Child 2</a></li>
					<li className="greeting">Hi, {this.state.userID}</li>
					<li><a href='#' onClick={this.handleClick}>Log Out</a></li>
					</ul>;
		}

		var childrenWithProps = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, {setID: that.setID, highScores: that.state.highScores});
        });

		return(
		<div className="container-fluid navContainer">
		<div className="container-fluid containerFull">
			<nav className="navbar navbar-inverse navbarFull">
				<img height='36px' width='69px' className="icon" src="/assets/galaxyicon.png" />
				<h1 className="logo">Strange Galaxy</h1>
				{loggedIn}
				
			</nav>
		</div>
			<div className="container">
				<div className="modal fade loginModal" tabindex="-1" role="dialog" aria-labelledby="Login Modal">
				  <div className="modal-dialog" role="document">

				    <div className="modal-content modalPad modalContent">
				    	<div className="row">
				    		<div className="col-lg-12">
				    	
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
							       
							        <hr />

							        <button type="submit" className="btn btn-danger btn-lg btn-block" id='logMod'>Login</button>
						    	</form>
						    </div>
					    </div>
				    </div>
				  </div>
				</div>
			</div>

			<div className="modal fade signUpModal" tabindex="-1" role="dialog" aria-labelledby="Sign Up Modal">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content modalPad modalContent">
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
				      
				        <hr />

		        		<button type="submit" className="btn btn-danger btn-lg btn-block"  id='signMod'>Sign Up</button>
		    		</form>

			    </div>
			  </div>
			</div>

			<div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
				  <div className="modal-dialog modal-lg modalGame" role="document">
				    <div className="modal-content modalContent">
				      <div id="zemulon"></div>
				    </div>
				  </div>
				</div>


			    

				<div>
					
					{/*This code will dump the correct Child Component*/}
					{childrenWithProps}

				</div>

		</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;