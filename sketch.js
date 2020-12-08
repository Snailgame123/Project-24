
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, ball;


function setup() {
	var canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (600,390,1200,10);
	paper = new Paper (100,320,20,20);
	box1 = new Dustbin (750,335,15,100);
  box2 = new Dustbin (890,335,15,100);
	box3 = new Dustbin (820,378,150,15);

  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}




