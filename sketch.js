const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var Balls = [];
var Boundaries = [];

var player;

var ground;

function setup(){
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  
  
  createBalls();
  
  Boundaries.push(new Boundary(150, 80, width * 0.3, 10,0.2));
  Boundaries.push(new Boundary(300, 150, width * 0.3, 10, -0.2));
  Boundaries.push(new Boundary(200, 250, width * 0.3, 10, 0.5));
  Boundaries.push(new Boundary(400, 350, width * 0.3, 10, -0.5));
  
  Boundaries.push(new Boundary(250,500,width,20,0));
  Boundaries.push(new Boundary(0,250,height,20,1.57));
  Boundaries.push(new Boundary(500,250,height,20,1.57));
  
  player = new Player(250,460,50,50);
  
}

function createBalls(){
  var r = random(-230,230);
  var b = new Ball(width/2 + r,-10,10);
  Balls.push(b);
}

function draw(){
  background("royalblue");
  
  if (frameCount % 20 == 0){
    createBalls();
  }
  Engine.update(engine);
  
  for(var i = 0; i < Balls.length; i++){
    Balls[i].show();
  }
  for(var i = 0; i < Boundaries.length; i++){
    Boundaries[i].show();
  }
  if (keyDown("left")){
      player.move(-5,0);
  }
  else if (keyDown("right")){
      player.move(5,0);
  }
  player.show();
  
}