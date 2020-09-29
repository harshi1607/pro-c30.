
var block1,block2,block3,block4,block5,block6,block7,block8,
    block9,block10,block11,block12,block13,block14,block15,
    stand,polygon,polygonImg;
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies  
const Constraint = Matter.Constraint

function preload(){

}

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
  polygon= new Polygon(50,200,100)
  //polygon.addImage("download",polygonImg)
  stand= new Stand(390,300,400,20)

  block1= new Box(300,255,50,50)
  block2= new Box(350,255,50,50)
  block3= new Box(400,255,50,50)
  block4= new Box(450,255,50,50)
  block5= new Box(500,255,50,50)
  block6= new Box(320,205,50,50)
  block7= new Box(370,205,50,50)
  block8= new Box(420,205,50,50)
  block9= new Box(470,205,50,50)
  block10= new Box(345,155,50,50)
  block11= new Box(395,155,50,50)
  block12= new Box(445,155,50,50)
  block13= new Box(370,105,50,50)
  block14= new Box(420,105,50,50)
  block15= new Box(395,55,50,50)

  slingshot= new SlingShot(polygon.body,{x:100,y:220});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  polygon.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode ===32){
    slingshot.attach(this.polygon)
  }
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body)
  }
}