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

    remove(){

    }
}

nr = new Node('0')
n1 = new Node('1')
n2 = new Node('2')
n3 = new Node('3')
n4 = new Node('4')
n5 = new Node('5')
n6 = new Node('6')
n7 = new Node('7')
n8 = new Node('8')


let uob = new UOBTree()
uob.insert(n5)
uob.insert(n4)
uob.insert(n3)
uob.insert(n6)
uob.insert(n7)
uob.insert(n8)
uob.insert(n2)
uob.insert(nr)
uob.insert(n1)