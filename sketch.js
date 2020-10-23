var dustbin1,dustbin2,dustbin3;
var sprite1,sprite2,sprite3;
var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	sprite1=createSprite(450,635,15,100);
	sprite1.shapeColor="white";

	sprite2=createSprite(545,680,200,15);
	sprite2.shapeColor="white";

	sprite3=createSprite(645,635,15,100);
	sprite3.shapeColor="white";

	engine = Engine.create();
	world = engine.world;

	dustbin1 = Bodies.rectangle(450,635,15,100,{isStatic:true});
	World.add(world,dustbin1);

	dustbin2 = Bodies.rectangle(545,680,200,15,{isStatic:true});
	World.add(world,dustbin2);

	dustbin3 = Bodies.rectangle(645,635,15,100,{isStatic:true});
	World.add(world,dustbin3);
	
	ground = Bodies.rectangle(400,690,800,10,{isStatic:true});
	World.add(world,ground);

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	
	paper = Bodies.circle(100,635,20,options);
	World.add(world,paper);



	Engine.run(engine);
}


function draw() {
  background(0);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  rect(dustbin1.position.x,dustbin1.position.y,15,100);
  rect(dustbin2.position.x,dustbin2.position.y,200,15);
  rect(dustbin3.position.x,dustbin3.position.y,15,100);
  circle(paper.position.x,paper.position.y,20);
  
  
 
 drawSprites();
 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

