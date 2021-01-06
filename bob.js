class Pendulum {
    constructor(x,y,color){
        var options={
            restitution:0.1,
            friction:0,
            frictionAir:0.0,
            slop:3,
            inertia:Infinity
        };
         
        this.x=x;
        this.y=y;
        this.color=color;
        this.body=Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);
        }

        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            noStroke();
            fill(this.color);
            ellipse(0,0,50,50);
            pop();
        }
	};