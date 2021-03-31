const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var rock;

//objects in the game
var bg, rock, hill, castle, castle1, castle2;
var slingshot;


function preload(){
	bg = loadImage("images/background.jpg");
	princeImg = loadImage("images/prince.png");
}


function setup() {
	var canvas = createCanvas(1050, 400);
	engine = Engine.create();
	world = engine.world;

	   rock = new Rock(512, 100);
	
    
	hill = new Hill(500, 345);
	castle = new Castle();
	castle1 = new Castle2(453, 254);
	castle2 = new Castle2(550, 254);

	slingshot = new SlingShot(rock.body, {x: 515, y: 100});
}


function draw() {
	background(bg);

	slingshot.display();


	rock.display();
	hill.display();
	castle.display();
	//castle1.display();	
	//castle2.display();	
	

	Engine.update(engine);
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

