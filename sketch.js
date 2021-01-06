const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse= Matter.Mouse;
const MouseConstraint= Matter.MouseConstraint;

var world,engine,canvas;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;

var mConstraint;

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  //creating the bobs
  pendulum1= new Pendulum(250,300,"#06A7DC");
  pendulum2= new Pendulum(300,300,"#FE6301");
  pendulum3= new Pendulum(350,300,"##1CA773");
  pendulum4= new Pendulum(400,300,"#FE6301");
  pendulum5= new Pendulum(450,300,"#06A7DC");

  //creating the sling
  sling1= new Sling(pendulum1.body,{x:250,y:150});
  sling2= new Sling(pendulum2.body,{x:300,y:150});
  sling3= new Sling(pendulum3.body,{x:350,y:150});
  sling4= new Sling(pendulum4.body,{x:400,y:150});
  sling5= new Sling(pendulum5.body,{x:450,y:150});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  textSize(20);
  fill("lemonyellow")
  stroke("lemonyellow");
  strokeWeight(3);
  text("DRAG THE FIRST BOB TO MOVE",200,100);
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}