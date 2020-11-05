const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;
   var engine, world;
    var ground, ball
     function setup(){
         var canvas = createCanvas(400,400);
         engine = Engine.create(); 
         world = engine.world; 
         //adiing a static property to make our ground still and to be at one place
         var still={
             isStatic:true
         }
         ground=Bodies.rectangle(200,370,400,50,still)
          World.add(world,ground)
          var bounce ={
              restitution:1.5
          }
          ball=Bodies.circle(200,150,50,bounce)
          World.add(world,ball)
         } 
         function draw(){
              background(0);
             Engine.update(engine);
              rectMode(CENTER)
               rect(ground.position.x,ground.position.y,400,50)
               ellipseMode(RADIUS)
               ellipse(ball.position.x,ball.position.y,50,50)
             }