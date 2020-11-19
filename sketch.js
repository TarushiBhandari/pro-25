var trash;
var ground;
var side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,680,1800,30);
	trash= new Paper(300,200,70);
    side1= new Dustbin(780,625,15,100);
	side2= new Dustbin(697,667,150,15);
	side3= new Dustbin(620,625,15,100);

	Engine.run(engine);
}

function draw() {
  background("white");
  trash.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  keyPressed();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		//Paper.position= trash.position;
		Matter.Body.applyForce(trash.body,trash.body.position,{x:0.5,y:-1});
	}
}
