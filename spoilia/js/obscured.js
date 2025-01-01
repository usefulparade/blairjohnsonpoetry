var texts = [];
var wWidth = 0;
var wHeight = 0;
var stones = [];
var bods = [];

var engine;

var ground, ceiling, lWall, rWall;

var mConstraint;

var diagonal;
var canv;
var canvDiv;
//MATTER JS MODULE ALIASES

var Engine = Matter.Engine,
  //Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

function setup() {
  wWidth = 640;
  wHeight = 480;
  canv = createCanvas(wWidth, wHeight);
  canv.parent('canvasParent');
  canvDiv = select('#canvasParent');

  diagonal = sqrt((wWidth * wWidth) + (wHeight * wHeight));
  
  engine = Engine.create();
  world = engine.world;
  world.gravity.scale = 0.001;
  container();
  
  for (var i=0;i<3;i++){
    var s = new Stone(random(0, width), random(0, height), random(diagonal/8, diagonal/9), random(10, 20));
    stones.push(s);
  }
  for (var i=0;i<8;i++){
    var s = new Stone(random(0, width), random(0, height), random(diagonal/9, diagonal/12), random(10, 20));
    stones.push(s);
  }
  
  for (var j=0;j<stones.length;j++){
    stones[j].createPoly();
    bods[j] = stones[j].body;
  }

  engine.positionIterations = 3;
  
  Engine.run(engine);
}

function draw() {
  clear();
  
  
  for (var i=0;i<stones.length;i++){
    stones[i].show();
    stones[i].mouseStuff();
    stones[i].mouseForce();
  }
  
  passThrough();
}

function textDisplay(){
  push();
    fill(5);
    noStroke();
    textSize(24);
    textLeading(32);
    textFont("Georgia");
    text(texts[0], 10, 10, width-10, height-10);
  pop();
}

function container(){
  ground = Bodies.rectangle(width/2, height+55, width*2, 100, {isStatic: true});
  ceiling = Bodies.rectangle(width/2, 0-100, width*2, 100, {isStatic: true});
  lWall = Bodies.rectangle(0-55, height/2, 100, height*10, {isStatic: true});
  rWall = Bodies.rectangle(width+55, height/2, 100, height*10, {isStatic: true});

  World.add(engine.world, [ground, lWall, ceiling, rWall]);
}

function constraintSlower(){
    if (mConstraint.body){
    // for (var i=0;i<stones.length;i++){
    //   if (mConstraint.body.position.x > stones[i].pos.x - 10 && mConstraint.body.position.x < stones[i].pos.x + 10){
    //     stones[i].clicked = true;
    //   } else {
    //     stones[i].clicked = false;
    //   }
    // }
    //console.log(mConstraint.body);
  }
}

function mousePressed(){
  if (touches[0]) return;
  for (var i=0;i<stones.length;i++){
    if (stones[i].over){
      stones[i].clicked = true;
    } else {
      stones[i].clicked = false;
    }
  }
}

function mouseReleased(){
  if (touches[0]) return;
  for (var i=0;i<stones.length;i++){
    if (stones[i].clicked){
      stones[i].clicked = false;
    }
  }
}

function touchStarted(){
  for (var i=0;i<stones.length;i++){
      stones[i].mouseStuff();
      if (stones[i].over)
      {
        stones[i].clicked = true;
      }
    
  }
}

function touchEnded(){
  for (var i=0;i<stones.length;i++){
    if (stones[i].clicked){
      stones[i].clicked = false;
    }
  }
}

function touchCheck(touchZero){
  for (var i=0;i<stones.length;i++){  
    if (touchZero.x > stones[i].pos.x - stones[i].radius && touchZero.x < stones[i].pos.x + stones[i].radius && touchZero.y > stones[i].pos.y - stones[i].radius && touchZero.y < stones[i].pos.y + stones[i].radius){
      return true;
    } else {
      return false;
    }
  }
}

function passThrough(){
  var bodies = [];
  for (i=0;i<stones.length;i++){
    bodies.push(stones[i].body);
  }
  var numOver = Matter.Query.point(bodies, Matter.Vector.create(mouseX,mouseY));
  if (numOver.length > 0){
    // console.log('yep!');
    canvDiv.style('pointer-events', 'auto');
  } else {
    // console.log('nope!');
    canvDiv.style('pointer-events', 'none');
  }
}