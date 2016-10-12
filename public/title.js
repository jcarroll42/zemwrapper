var titleScreen = {

    preload: function() {
        

    },

    text: null,
    grd: null,
    introText: null,
    introContent: ["It's the future.", "You can tell because of the way that it is.", "Also because you're in a ship.", "A SPACE ship.", "And that ship is called...", "Zemulon Alpha"],
    printCount: 1,
    

    create: function() {
        this.startTime = game.time.now;
        console.log(game.time.now);

        game.stage.setBackgroundColor(0x000000);
        game.input.onTap.addOnce(this.startTheGame);
        titleScreen.text = game.add.text(game.world.centerX, game.world.centerY, "Zemulon Alpha");
        titleScreen.introText = game.add.text(23, 250, "");
        titleScreen.text.anchor.setTo(0.5);
        titleScreen.introText.text = titleScreen.introContent[0];

        titleScreen.text.font = 'Bungee Hairline';
        titleScreen.text.fontSize = 60;
        titleScreen.text.fill = "#FFFFFF";
        titleScreen.text.alpha = 0;
        titleScreen.text.align = 'center';
        titleScreen.text.strokeThickness = 2;

        titleScreen.introText.font = 'Bungee Hairline';
        titleScreen.introText.fontSize = 30;
        titleScreen.introText.fill = "#FFFFFF";
        titleScreen.introText.alpha = 0;
        titleScreen.introText.align = 'center';

        var alphaIn = game.add.tween(titleScreen.introText).to( { alpha: 1 }, 1000, "Linear", true, 0, 5);
        alphaIn.yoyo(true, 2000);

        game.time.events.add(25000, this.startTheGame, this);
        

    },

    mainText: function(){
        var mainTween = game.add.tween(titleScreen.text).to({alpha: 1}, 2000, "Linear");
        mainTween.start();

    },

    createText: function() {



        

    },

    startTheGame: function(){
        this.printCount = 1;
        game.state.start('main');
    },

    update: function(){
         if ((game.time.now - this.startTime) > 1000){
            if (titleScreen.introText.alpha === 0 && titleScreen.printCount < 6){
                if (titleScreen.printCount === 5){
                    titleScreen.introText.fontSize = 60;
                    titleScreen.introText.x = 120;
                    titleScreen.introText.y = 250;
                    console.log(game.time.now);
                }
                
                titleScreen.introText.text = titleScreen.introContent[titleScreen.printCount];
                titleScreen.printCount++;
                console.log();
                
            }
        }
    }
}
