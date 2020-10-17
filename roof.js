class Roof{
    constructor(x,y,width,hight){
        var options={
            'isStatic':true,
        }
        this.body=Bodies.rectangle(x,y,width,hight,options)
        this.width=width
        this.hight=hight
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        push()
        translate(pos.x,pos.y)
        fill("red")
        rect(0,0,this.width,this.hight)
        pop()
    }
}