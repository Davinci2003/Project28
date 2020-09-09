class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
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
        image(this.image,200,475,this.radius);
        pop();
    }
}