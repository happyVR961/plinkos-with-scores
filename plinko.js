class Plinko {
    constructor(x, y, radius) {
         var options = {
            //'restitution':0.2,
         isStatic : true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        //this.height = height;
       //this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        ellipseMode (RADIUS);
        fill("white")
        ellipse(this.body.position.x , this.body.position.y, this.radius, this.radius);
       // pop();
      }
    }