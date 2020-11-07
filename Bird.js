class Bird{

    constructor(x,y){

        var option = {

            restitution:0.5,
            friction:1,
            density:1

        }

        this.body=Bodies.rectangle(x,y,50,50,option);
        this.width=50;
        this.height=50;

        World.add(world,this.body)
    }

    display(){

        var p = this.body.position;

        push();

        rectMode(CENTER);
        fill("red");
        translate(p.x,p.y);
        rotate(this.body.angle);

        rect(0,0,this.width,this.height);

        pop();

    }
    
}