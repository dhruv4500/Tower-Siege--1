class Block {
    constructor(x, y, width, height,colour) {
      var options = {
          restitution:0.5,
          friction:0.5,
          density:0.4,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.colour=colour;
      
      World.add(world, this.body);
    }
    display(){
        push();
      var pos =this.body.position;
      //rectMode(CENTER);
      rectMode(CENTER);
      stroke(0);
      strokeWeight(1);
      fill(this.colour);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
  }
