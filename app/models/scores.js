// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var scoreSchema = mongoose.Schema({

    
        username: {
        	type: String
        },
        score:{
        	type: Number
        }
    

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Scores', scoreSchema);