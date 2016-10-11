// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

var helpers = {


	getID: function(){

		return axios.get('/id')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	getHighScores: function(){

		return axios.get('/api').then(function(response){
			return response;
		});

		
	}

}


// We export the helpers function 
module.exports = helpers;