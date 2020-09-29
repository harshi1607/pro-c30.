class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        this.image=loadImage("wood1.png")
        World.add(world, this.body);
      }
      display(){  
console.log(this.body.speed)
      if(this.body.speed<3){
        push();
        imageMode(CENTER);
        //fill("yellow");
        image(this.image,0, 0,50,50);
        pop();
        }
      
      else{
        World.remove(world,this.body)
        push();
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        pop();

      }
    }
}
//var pos =this.body.position;
       // push()
        //translate(pos.x,pos.y)
        //rectMode(CENTER);
        //fill("yellow");
        //rect(0, 0, this.width, this.height);
        //pop();