class Bob{
    constructor(x,y,r){
        var options={
            'density':0.4,
            'restitution':1.2,
            'friction':0,
            'isStatic':false
         }
         this.x=x
         this.y=y
         this.r=r
         this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
         World.add(world,this.body)
    }
    display(){
        var pos=this.body.position 
        push()
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        fill("green")
        ellipse(0,0,this.r,this.r)
        pop()
    }
}