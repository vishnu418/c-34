const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14
var ball,rope




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,350,1200,30);
box1 = new Box(800,300,50,50);
box2 = new Box(850,300,50,50);
box3 = new Box(900,300,50,50);
box4 = new Box(950,300,50,50);
box5 = new Box(800,250,50,50);
box6 = new Box(850,250,50,50);
box7 = new Box(900,250,50,50);
box8 = new Box(950,250,50,50);
box9 = new Box(800,200,50,50);
box10 = new Box(850,200,50,50);
box11 = new Box(900,200,50,50);
box12 = new Box(950,200,50,50);
ball = new Ball(700,250,50,50);
rope = new Rope(ball.body,{x:700,y:50});

    
}

function draw(){
    background("yellow");
    Engine.update(engine);
    ground.display();
     box1.display();  
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     ball.display();
     rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

