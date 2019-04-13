function Stone(x, y, s, n){
  this.pos = new p5.Vector(x, y);
  this.radius = s;
  this.verts = [];
  this.npoints = n;
  this.angle = TWO_PI / this.npoints;
  this.over = false;
  this.clicked = false;
  
  this.createPoly = function(){
    for (var a = 0; a < TWO_PI; a += this.angle + random(-0.2, 0.2)) {
      var sx = this.pos.x + cos(a + random(-2, 2)) * (this.radius + random(-20, 15));
      var sy = this.pos.y + sin(a) * (this.radius + random(-20, 15));
      var vert = new p5.Vector(sx, sy);
      append(this.verts, vert);
    }
    
    this.body = Bodies.fromVertices(this.pos.x, this.pos.y, this.verts);
    //this.body.timeScale = 1;
    this.body.friction = 0.01;
    this.body.intertia = 1;
    //this.body.frictionAir= 0.3;
    //this.body.restitution = 0.1;
    //this.body.slop = 0.2;
    Matter.Body.setDensity(this.body, 0.01);
    World.add(engine.world, [this.body]);
  };
  
  this.show = function(){
    push();
      
      //STROKE
      strokeWeight(0.2);
      if (this.clicked){
        stroke(5);
      } else {
        noStroke();
      }

      //FILL
      if (this.over){
        fill(255);
      } else {
        fill (255);
      }
      beginShape();
        for (i=0;i<this.body.vertices.length;i++){
          vertex(this.body.vertices[i].x, this.body.vertices[i].y);
        }
        vertex()
      endShape(CLOSE);
    pop();
  };
  
  this.mouseStuff = function(){
    this.pos.x = this.body.position.x;
    this.pos.y = this.body.position.y;
    if (mouseX > this.pos.x - this.radius && mouseX < this.pos.x + this.radius && mouseY > this.pos.y - this.radius && mouseY < this.pos.y + this.radius){
        this.over = true;
      } else {
        this.over = false;
      }
  };
  
  this.mouseForce = function(){
    
    this.mouseVect = new p5.Vector(mouseX, mouseY);
    this.mouseDistX = map((this.pos.x-this.mouseVect.x), 0, 800, 0, 8);
    this.mouseDistY = map((this.pos.y-this.mouseVect.y), 0, 600, 0, 8);
    
    this.f = new p5.Vector(-this.mouseDistX, -this.mouseDistY);
    
    
    
    
    
    if (this.clicked){
      Matter.Body.applyForce(this.body, this.pos, this.f);
    } else {
      
    }
  };
}