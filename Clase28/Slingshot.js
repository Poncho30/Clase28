class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly() {
    this.sling.bodyA = null;

    }


    
    display(){
        if (this.sling.bodyA){


        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}