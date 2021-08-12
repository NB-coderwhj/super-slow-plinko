const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var p1;
var ground;

var plinkos = [];
var particles = [];
var divisions = [];

var divHt = 160;

function setup() {
  createCanvas(450,600);

  engine = Engine.create();
  world = engine.world

  ground = new Ground(570);

  for(var d = 0; d<=width; d += 90){
    divisions.push(new Division(d,height-divHt/2-40, 10, divHt));
  }

  pushParticles();
  pushPlinkos();

}

function draw() {
  Engine.update(engine);
  background(250,195,190);  

  pushParticles();
  pushPlinkos();

  ground.display();

  for(var d =0; d<divisions.length; d++){
  divisions[d].display();
  }
  for(var k =0; k<particles.length; k++){
    particles[k].display();
  }
  for(var p =0; p<plinkos.length; p++){
    plinkos[p].display();
  }
  
}

function pushParticles(){
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-100, width/2+100),10))
  }
}

function pushPlinkos(){
  for(var p=20; p<=width; p+=50){
    plinkos.push(new Plinko(p,250));
    plinkos.push(new Plinko(p,150));
    plinkos.push(new Plinko(p,350));
  }
  for(var p= 30; p<= width; p+=50){
    plinkos.push(new Plinko(p,100));
    plinkos.push(new Plinko(p,200));
    plinkos.push(new Plinko(p,300));
  }
}