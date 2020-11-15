var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var landingZone1Sprite,landingZone2Sprite,landingZone3Sprite,landingZone1,landingZone2,landingZone3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	landingZone1Sprite= createSprite(195,470,10,50);
	landingZone1Sprite.x=landingZone2.x-55;
	landingZone1Sprite.shapeColor="red";

	landingZone2Sprite= createSprite(width/2, 490,100,10);
	landingZone2Sprite.shapeColor="red";

	landingZone3Sprite= createSprite(305,470,10,50);
	landingZone3Sprite.x=landingZone2.x+55;
	landingZone3Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 landingZone1= Bodies.rectangle(195,420,10,50, {isStatic:true});
	 World.add(world, landingZone1);

	 landingZone2= Bodies.rectangle(width/2,440,100,10, {isStatic:true});
	 World.add(world, landingZone2);

	 landingZone3= Bodies.rectangle(305,420,10,50,{isStatic:true});
	 World.add(world, landingZone3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic( packageBody, false);
   
  }
}



