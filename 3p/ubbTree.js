(()=>{
    //UBBTree - Unsorted, Binary & Balanced

class Node{
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
        this.flag = null;
    }
}

class UBBTree{
    constructor(root = null){
        this.root = root; 
        this.arr = [];
    }

    insert(node){
        if(this.root === null)
            this.root = node
        else{
            this.orderingInsert(this.root, node)
        }
    }

    orderingInsert(node, newNode){
            if(node.left === null){
                node.left = newNode;
            }
            else if(node.right === null){
                node.right = newNode;
            }
            else if(node.left !== null && node.right !== null && this.flag == 'left'){
                this.orderingInsert(node.left, newNode)
                this.flag = 'right';
            }                
            else{
                this.orderingInsert(node.right, newNode)
                this.flag = 'left';
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
        } else if (key > root.data) {
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

let ubb = new UBBTree();

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
ubb.insert(h);
console.log(ubb.traversal(ubb.root, []));

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

nr.left = n1
nr.right = n2

n1.left = n3
n1.right = n4

n2.left = n5
n2.right = n6

n3.left = n7
n3.right = n8

ubb2 = new UBBTree();

ubb2.insert(nr)
//breadth-first
console.log(ubb2.breadthFirst());
//remove
ubb2.remove(3)
})();