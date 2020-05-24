class String{

    constructor(bodyA, pointB){
       
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 100
        }

      this.string = Constraint.create(options);
      this.pointB = pointB;

      World.add(world, this.string);

    }

    display(){

     var pointA = this.string.bodyA.position;
     var pointB = this.pointB;

     strokeWeight(4);
     fill("black");
     line(pointB.x, pointB.y, pointA.x, pointA.y);
    
    }
}