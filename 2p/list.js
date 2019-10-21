(function(){
    class Node{
        constructor(data='data'){
            this.data = data;
            this.next;
        }
    }
    
    class LinkedList{//
        constructor(n1,n2){
            this.head = n1;
            this.tail = n2;
            this.head.next = this.tail;
            this.length = 2;
        }//tendrá dos nodos
    
        insertHead(o){
            o.next = this.head;
            this.head = o;
            this.length++;
        }
    
        insertTail(o){
            this.tail.next = o
            this.tail = o;
            this.length++;
        }//put, set   
        
        deleteHead(){
            this.head = this.head.next;
            this.length--;
        }
    
        deleteTail(){
            let temp = this.head;
            for(let i = 0; i < this.length-2; i++)
                temp = temp.next 
        
            temp.next = null;
            this.tail = null;
            this.tail = temp;        
            this.length--;
        }
        
        size(){
            return this.length;
        }//sumar 1 al insert y restar 1 al delete
    
        toString(){//return cadena de todos los valores de c/u nodo
            let aux = this.head, str = this.head.data;
            for(let i = 0; i < this.length-1; i++){
                aux = aux.next
                str += ' ' + aux.data;
            } 
            return str;           
        }
    }
    
    let n1 = new Node('node1')
    let n2 = new Node('node2')
    let n3 = new Node('node3')
    let n4 = new Node('node4')
    
    let l = new LinkedList(n1,n2)
    l.insertTail(n3)
    l.insertTail(n4)
    console.log(l.toString())
})()