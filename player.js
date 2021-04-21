function Player(x, y, w, h){
    this.body = Bodies.rectangle(x, y, w, h);
    
    this.w = w;
    this.h = h;
    
    this.x = x;
    this.y = y;
    
    
    World.add(world, this.body);
    
    this.move = function(a,b){
      Matter.Body.translate(this.body,{x:a,y:b});
    }
    
    
    this.show = function(){
      var pos = this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(degrees(angle));
      rectMode(CENTER);
      strokeWeight(1);
      noStroke();
      fill("tomato");
      rect( 0, 0, this.w, this.h);
      pop();
    };
  }