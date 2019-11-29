(()=>{
    //UOBTree - unbalanced, ordered, binary

class Node{
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class UOBTree{
    constructor(root = null){
        this.root = root; 
    }

    insert(node){
        if(this.root === null)
            this.root = node
        else{
            this.orderingInsert(this.root, node)
        }
    }

    orderingInsert(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            else
                this.orderingInsert(node.left, newNode)
        }
        else{
            if(node.right === null)
                node.right = newNode;
            else
                this.orderingInsert(node.right, newNode)
        }
    }

    breadthFirst(tree=this.root){
        let queue = [], currentNode = null, arr = [];
        queue.push(tree)
        arr.push(tree.data)

        while(queue.length > 0){
            currentNode = queue[0]
    
            if(currentNode.left){
                queue.push(currentNode.left)
                arr.push(currentNode.left.data)
            }
                
            if(currentNode.right){
                queue.push(currentNode.right)
                arr.push(currentNode.right.data)
            }
                queue.shift()
        }
        return arr
    }

    traversal(tree=this.root, vec = []){//preorder, vec es para almacenar los valores en él, no se debe pasar nada
        vec.push(tree.data);
        if(tree.left)
            this.traversal(tree.left, vec)

        if(tree.root)
            this.traversal(tree.root, vec)

        if(tree.right)
            this.traversal(tree.right, vec)

        return vec;
    }

    remove(data){
        return !(this.deleteNodeHelper(this.root, data) === false);
    }

    deleteNodeHelper(root, key) {
        if (root === null) {
           // Empty tree return false;
        }
        if (key < this.root.data) {
            root.left = this.deleteNodeHelper(root.left, key);
            return root;
        } else if (key > this.root.data) {
            root.right = this.deleteNodeHelper(root.right, key);
            return root;
        } else {
            // No children
            //case 1 - a leaf node
            if (root.left === null && root.right === null) {
                root = null; 
                return root;
            }
            // Single Child cases
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;
     
           // Both children, so need to find successor 
           let currNode = root.right;
           while (currNode.left !== null) {
              currNode = currNode.left;
           }
           root.data = currNode.data;
           // Delete the value from right subtree.
           root.right = this.deleteNodeHelper(root.right, currNode.data);
           return root;
        }
    }
}

let uob = new UOBTree();

// ------------------ EXAMPLES ----------------------
let h = new Node('h')
let d = new Node('d')
let g = new Node('g')
let e = new Node('e')
let c = new Node('c')
let b = new Node('b')
let f = new Node('f')
let a = new Node('a')

h.left = d
h.right = g

d.left = e
d.root = c
d.right = b

c.left = f
c.right = a
//traversal - preorder
uob.insert(h);
console.log(uob.traversal(uob.root, []));

/*breadth-first */
nr = new Node(0)
n1 = new Node(1)
n2 = new Node(2)
n3 = new Node(3)
n4 = new Node(4)
n5 = new Node(5)
n6 = new Node(6)
n7 = new Node(7)
n8 = new Node(8)

uob2 = new UOBTree();

uob2.insert(n5)
uob2.insert(n4)
uob2.insert(n3)
uob2.insert(n6)
uob2.insert(n7)
uob2.insert(n8)
uob2.insert(n2)
uob2.insert(nr)
uob2.insert(n1) 

//breadth-first
console.log(uob2.breadthFirst());
//remove
uob2.remove(3)
})()