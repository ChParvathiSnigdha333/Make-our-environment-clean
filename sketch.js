
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(1000,360,200,10)
	dustbin2 = new Dustbin(905,290,10,130)
	dustbin3 = new Dustbin(1095,290,10,130)

	paper = new Paper(100,320,20)

	ground = new Ground(600,370,1200,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper.display();

  drawSprites();

  stroke("black");
  strokeWeight(2);
  fill("violet")
  textSize(25);
  textFont("Comic Sans MS");
  text("Press", 350, 50);
  stroke("white");
  strokeWeight(2);
  fill("indigo")
  text(" 'up' ", 413,50)
  stroke("black");
  strokeWeight(2);
  fill("blue")
  text("to ", 473,50)
  fill("green")
  text("throw ", 509,50)
  fill("yellow")
  text("the ", 589,50)
  fill("orange")
  text("paper ", 640,50)
  fill("red")
  text("in ", 713,50)
  fill("violet")
  text("the ", 743,50)
  stroke("white");
  strokeWeight(2);
  fill("indigo")
  text("dustbin ", 795,50)

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body , paper.body.position , {x:65,y:-105})
	}
  }
  