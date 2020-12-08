class Paper{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:false,
            restitution:0.3,
            friction:1.5,
            density:4.5
        }
        this.body= Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height= height
        World.add(world,this.body)

    }
    display()
{
    var pos= this.body.position
    rectMode(CENTER)
    fill("maroon")
    rect(pos.x,pos.y,this.width,this.height)
}
}
function keyPressed(){
    if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85});

    }
}