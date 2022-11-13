
var radius = 40
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

		ball_options={
		isStatic:false,
		retitution:0.3,
		friction:0,
		density:1.2
		}

		ball=Bodies.circle(260,100,20,ball_options)
        World.add(world,ball)
		ellipseMode(RADIUS);
	 
		
		

	//Create the Bodies Here.
	ground =new Ground(width/2,670,width,20);
    right = new Ground (1350,600,20,120)
     left = new Ground (1150,600,20,120)
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  right.show()
  left.show()
 ellipse(ball.position.x,ball.position.y,radius,radius)
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}


}

