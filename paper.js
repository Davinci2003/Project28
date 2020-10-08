class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            friction:0.5,
            density:0.7,
        }
        this.radius = radius;
        //this.x=x;
        //this.y=y;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(125);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
