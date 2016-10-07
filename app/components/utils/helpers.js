// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


// Helper Functions (in this case the only one is runQuery)
var helpers = {


	// This function hits our own server to retrieve the record of query results
	getID: function(){

		return axios.get('/id')
			.then(function(response){

				console.log(response);
				return response;
			});
	}

}


// We export the helpers function 
module.exports = helpers;