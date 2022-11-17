
var c = new Canvas()
c.setSize(500,100)
c.line(new Vector(0,c.height/2), new Vector(c.width, c.height/2))

var sins = []
var amp = c.height/4
var freq = 3
var waveLength = c.width/freq
function makeSin(a:number,f:number, theta:number):number{
    return(-a*Math.sin(f*2*theta))
}

for(var i=-Math.PI;i<Math.PI;i+=1/c.width){
    var sum = 0;
    for(var j=0;j<10;j+=1){
        if(j%2!==0){
            sum+=makeSin(amp/(j), freq*j, i)
        }
    }
    sins.push(new Vector(i*waveLength,(c.height/2) + (sum)))
}
document.body.append(c.dom)

sins.forEach((val:Vector)=>{
    c.circle({
        pos:val,
        radius:1,
        fill:true,
        fillColor:"red"
    })

})


