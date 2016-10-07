// Include React 
var React = require('react');

var Main = React.createClass({

	getInitialState: function(){
		return {
			userID: ""
		}
	},

	setID: function(id){
		this.setState({
			userID: id
		})
	},

	// componentDidUpdate: function(prevProps, prevState){

	// 	if(prevState.userID != this.state.userID){
	// 		console.log("UPDATED");

	// 		// Run the query for the address
	// 		helpers.getID()
	// 			.then(function(id){
	// 				if (data != this.state.results)
	// 				{
	// 					console.log("Articles", data);

	// 					this.setState({
	// 						results: data
	// 					})

	// 					// After we've received the result... then post the search term to our history. 
						
						
	// 				}
	// 			}.bind(this))
				
	// 		}
	// Here we render the function
	render: function(){

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
			    
				    <form action="/login" method="post">
				        <div className="form-group">
				            <label>Username</label>
				            <input type="text" className="form-control" name="username" />
				        </div>
				        <div className="form-group">
				            <label>Password</label>
				            <input type="password" className="form-control" name="password" />
				        </div>

				        <button type="submit" className="btn btn-warning btn-lg">Login</button>
				    </form>
			    </div>
			  </div>
			</div>

			<div className="modal fade signUpModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
			  <div className="modal-dialog modal-lg" role="document">
			    <div className="modal-content">
			      <h1>Sign Up</h1>
			    
					<form action="/signup" method="post">
				        <div className="form-group">
				            <label>Username</label>
				            <input type="text" className="form-control" name="username" />
				        </div>
				        <div className="form-group">
				            <label>Password</label>
				            <input type="password" className="form-control" name="password" />
				        </div>

		        <button type="submit" className="btn btn-warning btn-lg">Signup</button>
		    </form>

			    </div>
			  </div>
			</div>
			    

				<div className="row">
					
					{/*This code will dump the correct Child Component*/}
					{this.props.children}

				</div>

		</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;