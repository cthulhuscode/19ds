(()=>{
    class Graph { 
        constructor() 
        { 
            this.noVertices = null;
            this.noEdges = null; 
            this.AdjList = new Map(); 
            this.multigraph = false;
        } 
        
        addVertex(v){
            this.noVertices++;
            this.AdjList.set(v, [])
        } 
    
        addEdge(v, w, symmetric = false) {
            if(this.AdjList.get(v).includes(w) || this.AdjList.get(w).includes(v))
                this.multigraph = true;
            if(symmetric){
                this.AdjList.get(v).push(w);
                this.AdjList.get(w).push(v);
            }            
            else
                this.AdjList.get(v).push(w);
            this.noEdges++;
        }
        printGraph(){
            var get_keys = this.AdjList.keys(); 
      
            // iterate over the vertices 
            for (var i of get_keys)  
            { 
                // great the corresponding adjacency list 
                // for the vertex 
                var get_values = this.AdjList.get(i); 
                var conc = ""; 
        
                // iterate over the adjacency list 
                // concatenate the values into a string 
                for (var j of get_values) 
                    conc += j + " "; 
        
                // print the vertex and its adjacency list 
                console.log(i + " -> " + conc); 
            }
        }
        
        isComplete(){
            let edgesSum = ((this.noVertices * (this.noVertices - 1)) / 2);
            if (this.noEdges === edgesSum)
                return true;
            else 
                return false;
        
        }//<- boolean
    
        isSubgraph(g){
            let keys = this.objectToArray(this.AdjList.keys()); //Convert object Keys to an array
            for(let i = 0; i < g.length; i++){
                if(!keys.includes(g[i])) 
                    return false
            }
                return true;   
        }
    
        objectToArray(object){
            return Array.from(object);
        }
    
        isMultigraph(){
           return this.multigraph;
        }//<- boolean
    
        makeAdjacencyMatrix(){
            let keys = this.objectToArray(this.AdjList.keys()); //Convert object Keys to an array
            let matrix = [];
            
            //making matrix structure
            for(let i = 0; i < keys.length; i++){
                matrix.push([]);
            }
    
            for(let i = 0; i < keys.length; i++){
                for(let k = 0; k < keys.length; k++){
                    if(this.AdjList.get(keys[i]).includes(keys[k]))
                        matrix[i].push(1);
                    else
                        matrix[i].push(0);
                }            
            }
           return matrix;
        }
    
        isSymmetric(){
            let matrix = this.makeAdjacencyMatrix()
            //this.AdjList.forEach((v,k)=>{console.log('v = ' + v + ' k = '+ k); matrix.push(v)});
            
            for(let i = 0; i < matrix.length; i++){
                for(let k = 1; k < matrix.length; k++){
                    //console.log('['+k+']'+'['+i+']:' + this.matrix[i][k] + ' != ' + '['+k+']'+'['+i+']:' + this.matrix[k][i])
                    if(matrix[i][k] != matrix[k][i] && k!=i)
                        return false;
                }                
            }
            return true
        }
    
        isDigraph(){
            return !this.isSymmetric();
        }//<- boolean -- directed 
    
        isDirected(){
            return !this.isSymmetric();
        }
    } 
    
    let g = new Graph();
    
    //addEdges
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C')
    
    //Complete graph
    g.addEdge('A','B', true);
    g.addEdge('A','C', true);
    g.addEdge('B','C', true);
    
    //isComplete
    console.log('isComplete = ' + g.isComplete())
    //isSubgraph
    console.log('isSubgraph = ' + g.isSubgraph(['A','B','C']))//true
    console.log('isSubgraph = ' + g.isSubgraph(['A','B','C','D']))//false
    //isMultigraph
    console.log('isMultigraph = ' + g.isMultigraph())
    //isDirected
    console.log('isDirected = ' + g.isDirected())
    
})();
