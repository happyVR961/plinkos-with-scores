class Particle {
    constructor(x, y, radius) {
         var options = {
        restitution:0.4,
       density:0.2,
        friction:0.1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        //this.height = height;
       //this.image = loadImage("paper.png");
       this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
       // console.log(this.body.speed);
        var angle = this.body.angle;
         //push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         noStroke();
         fill(this.color);
        ellipseMode (RADIUS);
        ellipse( 0,0, this.radius, this.radius);
        //pop();
      }
    }