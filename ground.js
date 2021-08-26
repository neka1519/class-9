class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic :true,
            friction : 0.5,
            density: 1.2
        }
        this.ground = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
      World.add(world, this.ground);
    }

    display(){
        
       stroke("brown");
       strokeWeight(5);
       fill("brown")
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.height)
    }
    }