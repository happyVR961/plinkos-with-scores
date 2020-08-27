class division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      for(var k = 0; k<=width; k = k+80){
        divisions.push(new division(k, height-divisionheight/2, 10, divisionheight));
      }
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
