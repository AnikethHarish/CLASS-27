class Chain{
    constructor(bird,log){
        var options={
        bodyA:bird,
        bodyB:log,
        stiffness:0.03,
        length:5.0
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      
    }

}