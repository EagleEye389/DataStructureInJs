class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }

}

class Tree{
    constructor(){
        this.root = null;
    }
    push(val){
        let node = new Node(val);
        if(!this.root){
               this.root = node;
        }
        else{
            let current  = this.root;
            
             while(true){
                 if(current.val == val) { return undefined;}
                if(val < current.val){
                    if(current.left == null){
                          current.left = node;
                           return this;
                    }
                    current = current.left;
                }
                else{
                     if(current.right == null ){
                         current.right = node;
                         return this;
                     }
                     current = current.right;
                }
            }
        }
    }

    find(val){

        if(!this.root){
            return null;
        }
        else{

            var current  = this.root;
            while(true){
                if(val == current.val) { return current;}
                if(current.val > val)
                {
                    if(current.left)  current = current.left;
                    else return "not found";
                }
                else
                {  
                    if(current.right) current = current.right;
                    else return "not found";
              

                }
            }

        }
    }
}
const bstTree = new Tree();
bstTree.push(10);
bstTree.push(16);
bstTree.push(13);
bstTree.push(1);
bstTree.push(5);
console.log(bstTree.find(1));
console.log(bstTree.find(11));