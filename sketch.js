const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper, bin1, bin2, bin3;


function setup(){
	canvas = createCanvas(1200, 300);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, height-20, 1200, 20);
	paper = new Paper(100, 30, 20);
	bin1 = new Bin (width-200, height-40, 200, 20);
	bin2 = new Bin (width-200-100-10, height-40-50+10, 20, 100);
	bin3 = new Bin (width-200+100+10, height-40-50+10, 20, 100);
  
}


function draw(){
	background(0);
    Engine.update(engine);

    ground.display();
    paper.display();
    bin1.display();
    bin2.display();
	bin3.display();
	key_pressed();
}

function key_pressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-2});
	}
}



