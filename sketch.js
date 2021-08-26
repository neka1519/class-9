
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var stick1, stick2, stick3;
var world, engine;
var log1, log2,log3;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

paper =new PaperBall(50,400,20);
ground = new Ground (600,550,1200, 20);

log1=new Dustbin(1000,550,200,20);
	log2=new Dustbin(1090,490,20,100);
  log3=new Dustbin(910,490,20,100);
  Engine.run(engine);
  
}


function draw() {
  
  background(0);
 Engine.update(engine);

  paper.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85 })
}
}


