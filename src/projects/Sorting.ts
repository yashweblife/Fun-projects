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

export class QuickSort{
    public data:number[];

    constructor(data:number[]){
        this.data = data;
    }
    public update = ()=>{
        const splitter = (arr:number[],itter:number=0):number[]=>{
            if(itter == arr.length-1) {
                console.log("test", arr);
                return(arr);
            }
            itter+=1;
            const index = 0;
            const pivot = arr[index]
            const more:number[] = []
            const less:number[] = []
            for(var i=0;i<arr.length;i++){
                if(i!=index){
                    if(arr[i]<=pivot){
                        less.push(arr[i])
                    }else{
                        more.push(arr[i])
                    }
                }
            }
            const output = less;
            output.push(pivot)
            more.forEach((m:number)=>{
                output.push(m)
            })
            console.log(pivot, output)
            splitter(output,itter)
        }
        const op = splitter(this.data);
        console.log("Final : ", op)
    }

}