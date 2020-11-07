class Ground{

    constructor(x,y,width,height){

        var option = {

            isStatic:true

        }

        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;

        World.add(world,this.body);

    }

    display(){

        var b=this.body.position;

        push();

        rectMode(CENTER);
        fill("black");

        rect(b.x,b.y,this.width,this.height);

        pop();
        
    }
}