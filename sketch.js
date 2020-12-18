const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball1;
var ball2;

function setup() {
 1 createCanvas(400,400);

  engine=Engine.create()
  world=engine.world;

  var options= {
    isStatic:true
  }

  var ball1_options= {
    restitution: 0.9
  }

  var ball2_options= {
    restitution: 0.9
  }

  ground= Bodies.rectangle(200,380,400,20,options)
 World.add(world,ground);
  

ball1=Bodies.circle(200,150,20,ball1_options)
World.add(world,ball1);


ball2=Bodies.circle(200,200,20,ball2_options)
World.add(world,ball2);

}

function draw() {
  background("blue");  

  Engine.update(engine)

//console.log(object.position.x)
//console.log(object.position.y)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)

ellipseMode(RADIUS)
ellipse(ball1.position.x,ball1.position.y,20)


ecllipseMode(RADIUS)
ecllipse(ball2_position.x,ball2.position.y,20)
  
}