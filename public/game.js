var game = new Phaser.Game(800, 600, Phaser.AUTO, 'zemulon');

var score = 0;

game.state.add('main', mainState);
game.state.add('title', titleScreen);
game.state.add('gameOver', gameOver);

// game.state.start('title');

// $('#zemStart').click(function(){
// 	console.log('hi');
// 	game.state.start('main');
// });