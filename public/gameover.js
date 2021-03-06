
//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

//  The Google WebFont Loader will look for this object, so create it before loading the script.
// WebFontConfig = {

//     //  'active' means all requested fonts have finished loading
//     //  We set a 1 second delay before calling 'createText'.
//     //  For some reason if we don't the browser cannot render the text the first time it's created.
//     active: function() { game.time.events.add(Phaser.Timer.SECOND, gameOver.createText, this); },

//     //  The Google Fonts we want to load (specify as many as you like in the array)
//     google: {
//       families: ['Bungee Hairline']
//     }

// };

var gameOver = {

    // preload: function() {

    //     //  Load the Google WebFont Loader script
    //     game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    //     console.log("hi");

    // },

    text: null,
    grd: null,

    create: function() {

        game.input.onTap.addOnce(this.startTheGame);
        game.stage.setBackgroundColor(0x000000);
        this.startButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        this.createText();
        //this.postScore();

    },

    startTheGame: function(){
        game.state.start('main');
    },

    postScore: function(){

        // return axios.post('/api', {userID: 'josh', score: score})
        //     .then(function(results){

        //         console.log("Posted to MongoDB");
        //         return(results);
        //     })
        //console.log('multiple call instances');

        //$.post("/api", {score: score});
        //that.setGameCount(1);
    },

    createText: function() {
        var endString = "GAME OVER\n SCORE: " + score;

        this.text = game.add.text(game.world.centerX, game.world.centerY, endString);
        this.text.anchor.setTo(0.5);

        this.text.font = 'Bungee Hairline';
        this.text.fontSize = 60;
        this.text.fill = "#FFFFFF"

        //  x0, y0 - x1, y1
        // this.grd = this.text.context.createLinearGradient(0, 0, 0, this.text.canvas.height);
        // this.grd.addColorStop(0, '#8ED6FF');   
        // this.grd.addColorStop(1, '#004CB3');
        // this.text.fill = this.grd;

        this.text.align = 'center';
        //this.text.stroke = '#000000';
        this.text.strokeThickness = 2;
        //this.text.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

        score = 0;

        //this.text.events.onInputOver.add(this.over, this);
        //this.text.events.onInputOut.add(this.out, this);

    },

    update: function(){
       
    }
}
