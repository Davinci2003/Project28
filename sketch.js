
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binImg, bin;
var paper;
var ground;

function preload()
{
	//binImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(500,500,10);
	ground = new Ground();
	bin = new Bin(1100,475);
	//bin.addImage(binImg);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  paper.display();
  bin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})
	}
}

