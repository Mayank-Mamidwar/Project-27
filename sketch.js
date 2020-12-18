
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var chain1;
var chain2;
var chain3;
var chain4;
var chain5;



function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(200, 200, 200, 20);

	bobObject1 = new Bob(150, 400, 20);
	bobObject2 = new Bob(160, 400, 20);
	bobObject3 = new Bob(200, 400, 20);
	bobObject4 = new Bob(240, 400, 20);
	bobObject5 = new Bob(280, 400, 20);

	chain1 = new Rope(bobObject1.body, roof.body, -bobObject1.radius * 4, 0);
	chain2 = new Rope(bobObject2.body, roof.body, +bobObject2.radius * -1.8, 0);
	chain3 = new Rope(bobObject3.body, roof.body, bobObject3.radius * 0, 0);
	chain4 = new Rope(bobObject4.body, roof.body, bobObject4.radius * 1.8, 0);
	chain5 = new Rope(bobObject5.body, roof.body, bobObject5.radius * 4, 0);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	drawSprites();

}



