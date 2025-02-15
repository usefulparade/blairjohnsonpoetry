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

let areaMax = 225;
let areaStones = 0;

let touchScreen = false;
//MATTER JS MODULE ALIASES

var Engine = Matter.Engine,
  //Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

function setup() {
  wWidth = 640;
  if (windowWidth < 640)
  {
    wWidth = windowWidth;
  }
  wHeight = 480;

  areaMax = wWidth * 0.33;
  canv = createCanvas(wWidth, wHeight);
  canv.parent('canvasParent');
  canvDiv = select('#canvasParent');

  diagonal = sqrt((wWidth * wWidth) + (wHeight * wHeight));
  
  engine = Engine.create();
  world = engine.world;
  world.gravity.scale = 0.001; // normal
  // world.gravity.scale = 0.0005; // easier 
  container();
  
  // //create 3 bigger stones
  // for (var i=0;i<3;i++){
  //   var s = new Stone(random(0, width), random(0, height), random(diagonal/8, diagonal/9), random(10, 20));
  //   stones.push(s);
  // }
  // //create 8 smaller stones
  // for (var i=0;i<8;i++){
  //   var s = new Stone(random(0, width), random(0, height), random(diagonal/9, diagonal/12), random(10, 20));
  //   stones.push(s);
  // }

  // new hopefully more consistent method, create stones until areaMax has been met.
for (var i=0;i<20;i++){
    let posx = random(0, width);
    let posy = random(0, height);
    let bigStones = 1;
    let rad;
    if ( i < bigStones )      // make sure there's at least X large stones
    {
      rad = random(diagonal/7, diagonal/9);
    }
    else                      // fill the rest until we meet areaMax
    {
      rad = random(diagonal/8, diagonal/14);
    }
    
    let n = random(10, 20);
    var s = new Stone(posx, posy, rad, n);
    // print(rad);
    let thisArea = (PI * (rad*rad)) / 1000;
    print(thisArea);
    areaStones += thisArea;
    if (areaStones > areaMax) {
      print(stones.length);
      break;
    }

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

  if (!touchScreen && touches[0])
  {
    console.log("touchscreen gravity active");
    world.gravity.scale = 0.00033; // easier on touchscreen
    touchScreen = true;
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
  ceiling = Bodies.rectangle(width/2, 0-width/2, width*2, width/4, {isStatic: true});
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
  if (touchScreen && touches[0])
  {
    numOver = Matter.Query.point(bodies, Matter.Vector.create(touches[0].x,touches[0].y));
  }
  
  if (numOver.length > 0){
    // console.log('yep!');
    canvDiv.style('pointer-events', 'auto');
  } else {
    // console.log('nope!');
    canvDiv.style('pointer-events', 'none');
  }

}