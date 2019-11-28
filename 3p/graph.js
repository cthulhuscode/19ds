class Graph{
    constructor(noVertices = null){
        this.noVertices = noVertices;
        this.matrix = [this.noVertices];
        this.makeMatrix();
    }

    addVertex(o){
        this.matrix.push(this.makeNewRow(this.noVertices));
        for(let i in this.matrix)
            this.matrix[i].push(0);
        this.noVertices++;
    }

    makeMatrix(){
        for(let i = 0; i < this.noVertices; i++)
            this.matrix[i] = new Array(this.noVertices);
        this.initZero();
    }
    
    makeNewRow(length){
        let vec = [];
        for(let i = 0; i < length; i++)
            vec.push(0);
        return vec;
    }

    initZero(){
        for(let i = 0; i < this.noVertices; i++){
            for(let k = 0; k < this.noVertices; k++)
                this.matrix[i][k] = 0;
        }  
        return this.matrix;
    }

    addEdge(v1,v2, isSymmetrical=false){
        if(isSymmetrical){
            this.matrix[v1][v2] = this.matrix[v1][v2] + 1;
            this.matrix[v2][v1] = this.matrix[v2][v1] + 1;
        }
        else
        this.matrix[v1][v2] = this.matrix[v1][v2] + 1;
    }

    printGraph(){
        return console.table(this.matrix);
    }
    
    isComplete(){//<- boolean
        for(let t = 0; t < this.matrix.length; t++){
            for(let k=t; k < this.matrix.length; k++){
                if(k!=t){
                    if(this.matrix[t][k] < 1)
                        return false;
                }
            }
        }
        return true;
    }
    
    isMultigraph(){
        for(let t = 0; t < this.matrix.length; t++){
            for(let k=t; k < this.matrix.length; k++){
                if(k!=t){
                    if(this.matrix[t][k] > 1)
                        return true;
                }
            }
        }
        return false;
    }//<- boolean
    isSubgraph(g){}//<- boolean
}

let g = new Graph(4);
g.addVertex();

//Making a complete graph
g.addEdge(0,1,true)
g.addEdge(0,2,true)
g.addEdge(0,3,true)
g.addEdge(0,4,true)

g.addEdge(1,2,true)
g.addEdge(1,3,true)
g.addEdge(1,4,true)

g.addEdge(2,3,true)
g.addEdge(2,4,true)

g.addEdge(3,4,true)