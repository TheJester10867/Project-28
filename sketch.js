
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, manago5, mango6, mango7, mango8, mango9;
var world, boy;
var string;

function preload(){
	boy = loadImage("boy.png");
  }

function setup() {
	var canvas = createCanvas(1300, 575);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1020, 170, 23);
  mango2 = new Mango(960, 100, 25);
	mango3 = new Mango(1100, 123, 22);
  mango4 = new Mango(875, 234, 23);
	mango5 = new Mango(1060, 231, 26);
	mango6 = new Mango(1075, 180, 21);
	mango7 = new Mango(890, 100, 27);
  mango8 = new Mango(937, 187, 20);
  mango9 = new Mango(1000, 110, 22);

	treeObj = new tree(970, 585);
  treeObj.scale = 1.3;

	groundObject = new ground(670, 575, 1340, 20);

	launcherObject = new Stone(110, 425, 35);
	
  string = new Sling(launcherObject.body, {x : 110, y : 425});

	Engine.run(engine);

}

function draw() {

  background(100, 202, 230);
  
  image(boy, 70, 345, 200, 300);

  treeObj.display();
  string.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  launcherObject.display();
  groundObject.display();

  txt();

  detectCollision(launcherObject, mango1);
  detectCollision(launcherObject, mango2);
  detectCollision(launcherObject, mango3);
  detectCollision(launcherObject, mango4);
  detectCollision(launcherObject, mango5);
  detectCollision(launcherObject, mango6);
  detectCollision(launcherObject, mango7);
  detectCollision(launcherObject, mango8);
  detectCollision(launcherObject, mango9);
}

function mouseDragged(){
	Matter.Body.setPosition(launcherObject.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	string.fly();
}

function txt(){
	textSize(35);
    text("Press SPACE Key to try again", 65, 40);
}

function detectCollision(llauncherObject, lmango){
  if (llauncherObject.body.position.x - lmango.body.position.x < llauncherObject.radius + lmango.radius && lmango.body.position.x - llauncherObject.body.position.x < llauncherObject.radius + lmango.radius && llauncherObject.body.position.y - lmango.body.position.y < llauncherObject.radius + lmango.radius && lmango.body.position.y - llauncherObject.body.position.y < llauncherObject.radius + lmango.radius){
    Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(launcherObject.body, {x : 110, y : 425});
		string.attach(launcherObject.body);
    console.log(mango1.radius*2);
	}
}