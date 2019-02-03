class Node{
    constructor(val){
        this.next = null;
        this.prev = null;
        this.data = val;
    }
}
class DoublyList {
    
    constructor(){
    this.head = null;
    this.tail = null;
    this.len =0;
    }

    push(val){
        //Check whether it is empty or not
        var node = new Node(val);
        if(this.head == null)
        { 
          this.head = node;
          this.tail = node;
          node.next = this.tail;
          node.prev= this.head;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            node.next = this.head;
            this.tail = node;
        }
        this.len++;
      return this;
    }

}

const list = new DoublyList();
list.push(2)
list.push(4);
list.push(5);