interface UniqueInterface{
    value:string;
    occurance:number[]
}

class TextCompression{}
class ImageCompression{}

export class CompressorDemo{
    private textArea:HTMLTextAreaElement;
    constructor(parent:HTMLElement){
        this.textArea = document.createElement("textarea")
        this.textArea.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        parent.append(this.textArea)
    }
    private getValue = ():string=>{
        return(this.textArea.value)
    }
    private update = ()=>{
        const text = this.getValue().split("");
        const uniqueText:string[] = []
        text.forEach((val:string)=>{
            if(!uniqueText.includes(val)){
                uniqueText.push(val);
            }
        })
        const indexes:UniqueInterface[] = []
        uniqueText.forEach((val:string)=>{
            const data:UniqueInterface = {
                value:val,
                occurance:[]
            }
            text.forEach((v:string,i:number)=>{
                if(v == val){
                    data.occurance.push(i)
                }
            })
            indexes.push(data)
            
        })
        console.log(indexes)
        console.log("Text Length: ",text.length*16)
        var storage = 0;
        indexes.forEach((data:UniqueInterface)=>{
            storage+=16
            storage+= data.occurance.length
        })
        console.log("Final", storage)
    }

    public app = ()=>{
        this.textArea.addEventListener("input",(e)=>{
            this.update()
        })
    }
}

/*

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

*/