const Engine = Matter.Engine 
const Bodies = Matter.Bodies
const  World = Matter.World

function setup(){
  createCanvas(1200,400)
  engine = Engine.create()
  world = engine.world
  
  var options = {
    restitution: 0.5,
    friction : 0.003,
    density :0.5

  }
  box = Bodies.rectangle(200,200,50,60)
  World.add(world,box)

  ball = Bodies.circle(600,100,20,options)
  World.add(world,ball)

  console.log(box)
  console.log(ball)

  ground = Bodies.rectangle(600,380,1200,20,{isStatic:true})
  World.add(world,ground)
}

function draw(){
  background(0)
  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(RADIUS)

  rect(box.position.x,box.position.y,50,60)
  console.log(box.position.y)
  
  ellipse(ball.position.x,ball.position.y,20,20)

  rect(ground.position.x,ground.position.y,1200,20)
}