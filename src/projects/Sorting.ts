export class BubbleSort{
    public data:number[];
    constructor(data:number[]){
        this.data = data;
    }
    public swap = (i1:number, i2:number) =>{
        const temp = this.data[i1]
        this.data[i1] = this.data[i2]
        this.data[i2] = temp
    }
    public update = ()=>{
        for(var i=0;i<this.data.length-1;i++){
            for(var j=0;j<this.data.length-i-1;j++){
                if(this.data[j]>this.data[j+1]){
                    this.swap(j,j+1);
                }
            }
        }
        console.log(this.data)
    }

}

class QuickSort{}