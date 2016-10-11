// app/routes.js
var Score = require('./models/scores.js');

module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res){
        console.log("here's home");
         res.sendFile(path.join(__dirname, 'index.html'));
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    
    // process the login form
    app.post('/login', passport.authenticate('local-login'), function(req, res){
        console.log(req.user);
        res.send(req.user);
    });

    app.post('/api', isLoggedIn, function(req, res){
      
        if (req.body.score > 0) {
            Score.create({'username': req.user.local.username, 'score': req.body.score}, function(err){
                if (err){
                    console.log(err);
                }
                else {
                    console.log("saved score");
                    res.send('ok');
                }
            })
        }
    });

    app.get('/api', function(req, res){
        Score.find({}).sort([['score', 'descending']]).limit(10)
            .exec(function(err, doc){

              if(err){
                console.log(err);
              }
              else {
                // console.log(doc);
                res.send(doc);
              }
        })
    });
    

    // =====================================
    // SIGNUP ==============================
    // =====================================
  
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup'), function(req, res){
        console.log(req.user);
        res.send(req.user);
    });


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/id', isLoggedIn, function(req, res) {
        console.log("here's the user name");
        console.log(req.user.local.username);
        res.send(req.user.local.username);
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.send("");
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()){
        console.log('yup auth');
        return next();
    }
    else{
        console.log('nope auth');
        res.send('');
    }

    // if they aren't redirect them to the home page
    // res.redirect('/');
    
}