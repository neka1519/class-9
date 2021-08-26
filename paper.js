class PaperBall {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2,
          friction : 0.5
      }
      this.body = Bodies.circle(x, y,radius,options);
    this.radius=10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(RADIUS);

      fill(random(0,255),random(0,255),random(0,255));
      //      r             g             b
      ellipse(0, 0,this.radius*2);
      pop();
    }
}