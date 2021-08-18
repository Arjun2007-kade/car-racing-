var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var backgroundImage,cars, car1, car2, car3, car4;

var track,car11,car22,car33,car44,ground;

function preload(){
  backgroundImage = loadImage("images/bg.jpg");
  ground = loadImage("images/ground.png");
  track = loadImage("images/track.jpg");
  car11 = loadImage("images/car11.png");
  car22 = loadImage("images/car22.png");
  car33 = loadImage("images/car33.png");
  car44 = loadImage("images/car44.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.update(2);
    game.end();
  }
}
