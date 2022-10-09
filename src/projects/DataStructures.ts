class LinkedNode{
    public data:any;
    public next:LinkedNode;
    constructor(data:any){
        this.data = data
    }
    public addData = (data:any)=>{
        if(this.next){
            this.next.addData(data)
        }else{
            this.next = new LinkedNode(data)
        }
    }
    public remove = (data:any)=>{
        if(this.data == data){
            const newList = 
        }
        if(this.next){
            const pre = this.next 
        }
    }
}
class LinkedList{
    public data:any[]
    public root:LinkedNode
    constructor(data:any){
        this.root = new LinkedNode(data)
    }
    public addData = (data:any)=>{
        this.root.addData(data)
    }
    public removeData = (data:any)=>{

    }
    public copy = ()=>{}
}


class TreeNode{
    public data:any
    public left:TreeNode|undefined
    public right:TreeNode|undefined
    constructor(data:any){
        this.data=data;
    }
    public addData = (data:any)=>{
        if(this.data>data){
            if(this.left){
                this.left.addData(data)
            }else{
                this.left = new TreeNode(data)
            }
        }else{
            if(this.right){
                this.right.addData(data)
            }else{
                this.right = new TreeNode(data)
            }
        }
    }
}
export class BinaryTree{
    public data:any
    public root:TreeNode;
    constructor(data:any){
        this.root = new TreeNode(data)
    }
    public addData = (data:any)=>{
        this.root.addData(data)
    }
    public traverseInOrder = (node:TreeNode)=>{
        var cNode = node;
        if(cNode){
            this.traverseInOrder(cNode.left)
            console.log(node.data)
            this.traverseInOrder(cNode.right);
        }
    }
    public traverse = ()=>{
        const arr:any = []
        const tin = (node:TreeNode)=>{
            var cNode = node;
            if(cNode){
                tin(cNode.left)
                arr.push(node.data)
                tin(cNode.right);
            }
        }
        tin(this.root)
        console.log(arr)
    }
}