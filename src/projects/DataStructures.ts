/**
 * ## Linked Node
 * A node for linked lists
 * It contains data and a reference to the nect node.
 */
class LinkedNode {
  public data: any;
  public next: LinkedNode;
  constructor(data: any) {
    this.data = data;
  }
  public addData = (data: any) => {
    if (this.next) {
      this.next.addData(data);
    } else {
      this.next = new LinkedNode(data);
    }
  };
  public remove = (data: any) => {
    if (this.data == data) {
      const newList = "";
    }
    if (this.next) {
      const pre = this.next;
    }
  };
}

/**
 * ## Linked List
 * Linked lists are like game levels, you have to go through each level to proceed forward.
 */
class LinkedList {
  public data: any[];
  public root: LinkedNode;
  constructor(data: any) {
    this.root = new LinkedNode(data);
  }
  public addData = (data: any) => {
    this.root.addData(data);
  };
  public removeData = (data: any) => {};
  public copy = () => {};
}
class StackNode {}

class Stack {
  private size: number = 0;
  public push = () => {};
  public pop = () => {};
  public top = () => {};
  public getSize = () => {};
}
class QueueNode {}
class Queue {
  private size: number = 0;
  public push = () => {};
  public pop = () => {};
  public top = () => {};
  public getSize = () => {};
}
class HeapNode {}
class Heap {}
class TreeNode {
  public data: any;
  public left: TreeNode | undefined;
  public right: TreeNode | undefined;
  constructor(data: any) {
    this.data = data;
  }
  public addData = (data: any) => {
    if (this.data > data) {
      if (this.left) {
        this.left.addData(data);
      } else {
        this.left = new TreeNode(data);
      }
    } else {
      if (this.right) {
        this.right.addData(data);
      } else {
        this.right = new TreeNode(data);
      }
    }
  };
}
export class BinaryTree {
  public data: any;
  public root: TreeNode;
  constructor(data: any) {
    this.root = new TreeNode(data);
  }
  public addData = (data: any) => {
    this.root.addData(data);
  };
  public traverseInOrder = (node: TreeNode | undefined) => {
    var cNode = node;
    if (cNode) {
      this.traverseInOrder(cNode.left);
      console.log(cNode.data);
      this.traverseInOrder(cNode.right);
    }
  };
  public traverse = () => {
    const arr: any = [];
    const tin = (node: TreeNode | undefined) => {
      var cNode = node;
      if (cNode) {
        tin(cNode.left);
        arr.push(cNode.data);
        tin(cNode.right);
      }
    };
    tin(this.root);
    console.log(arr);
  };
}

class GraphEdge {}
class GraphNode {}
class Graph {}

export class DataStructureDemo {}
