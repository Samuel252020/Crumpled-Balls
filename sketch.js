const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var engine, world;
var groundObjt, paperObjt, binObjt1, binObjt2, binObjt3;



function setup(){
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObjt = new Ground(width/2, height-20, 1200, 20);
	paperObjt = new Paper(100, 30, 20);
	binObjt1 = new Bin (width-200, height-40, 200, 20);
	binObjt2 = new Bin (width-200-100-10, height-40-50+10, 20, 100);
	binObjt3 = new Bin (width-200+100+10, height-40-50+10, 20, 100);

	Engine.run(engine);
  
}


function draw(){
	rectMode(CENTER);
	background(0);

    groundObjt.display();
    paperObjt.display();
    binObjt1.display();
    binObjt2.display();
	binObjt3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObjt.body,paperObjt.body.position,{x:85,y:-85});
	}
}



