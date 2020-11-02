var dustbin1,dustbin2,dustbin3,dustbinImg,dustbinImgObject;
var sprite1,sprite2,sprite3;
var ground;
var paper,paperImg,paperImgObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
}

function setup() {
	createCanvas(1600, 700);

	sprite1=createSprite(1330,600,15,150);
	sprite1.shapeColor="green";

	sprite2=createSprite(1400,680,160,15);
	sprite2.shapeColor="green";

	sprite3=createSprite(1470,600,15,150);
	sprite3.shapeColor="green";

	// paperImgObject=createSprite(100,635,50,50);
	// paperImgObject.addImage("paperImg",paperImg);
	// paperImgObject.scale=0.5;

	//dustbinImgObject=createSprite(1400,600,15,100);
	//dustbinImgObject.addImage("dustbinImg",dustbinImg);
	//dustbinImgObject.scale=0.5;


	engine = Engine.create();
	world = engine.world;

	dustbin1 = Bodies.rectangle(1330,600,15,150,{isStatic:true});
	World.add(world,dustbin1);

	dustbin2 = Bodies.rectangle(1400,680,160,15,{isStatic:true});
	World.add(world,dustbin2);

	dustbin3 = Bodies.rectangle(1470,600,15,150,{isStatic:true});
	World.add(world,dustbin3);
	
	ground = Bodies.rectangle(800,690,1600,10,{isStatic:true});
	World.add(world,ground);

	paper=new Paper(100,635,40);

	Engine.run(engine);
}


function draw() {
  background("yellow");
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1600,10);
  rect(dustbin1.position.x,dustbin1.position.y,15,150);
  rect(dustbin2.position.x,dustbin2.position.y,160,15);
  rect(dustbin3.position.x,dustbin3.position.y,15,150);
  
  paper.display();

 
 drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,{x:paper.body.position.x,y:paper.body.position.y},{x:450,y:-400})

	}
}

