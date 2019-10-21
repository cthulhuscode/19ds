const Vector = require('./vector')
module.exports = class Matrix{
    constructor(row, column){
        this.matrix = new Array(column);
        this.column = column;
        this.row = row;

        for(let i = 0; i < row; i++)
            this.matrix[i] = new Array(column);
        this.initZero()
    }

    initZero(){
        for(let i = 0; i < this.row; i++){
            for(let k = 0; k < this.column; k++)
                this.matrix[i][k] = 0;
        }  
        return this.matrix;
    }

    initRandom(){
        for(let i = 0; i < this.row; i++){
            for(let k = 0; k < this.column; k++)
            this.matrix[i][k] = Math.random(10);
        } 
        return this.matrix;
    }

    getRow(n){
        return new Vector(this.matrix[n]);
    }

    getCol(n){
        let col = new Array(this.row)
        for(let k = 0; k < this.row; k++)
            col[k] = this.getRow(k).getVal(n);
        return new Vector(col);
    }

    isSquared(){//2x2 devolver true or false
        if(this.row == this.column)
            return true
        return false
    }
    
    isSymmetric(){
        for(let i = 0; i < this.row; i++){
            for(let k = 1; k < this.row; k++){
                //console.log('['+k+']'+'['+i+']:' + this.matrix[i][k] + ' != ' + '['+k+']'+'['+i+']:' + this.matrix[k][i])
                if(this.matrix[i][k] != this.matrix[k][i] && k!=i)
                    return false;
            }                
        }
        return true
    }

    isIdentity(){
        for(let i = 0; i < this.row; i++){
            for(let k = 1; k < this.row; k++){
                //console.log('['+k+']'+'['+i+']:' + this.matrix[i][k] + ' != ' + '['+k+']'+'['+i+']:' + this.matrix[k][i])
                if(this.matrix[i][k] != 0 && this.matrix[k][i] != 0 && k!=i)
                    return false;
            }                
        }
        for(let i = 0; i < this.row; i++){
            for(let k = 0; k < this.row; k++){
                if(this.matrix[i][k] != 1 && k==i)
                    return false                   
            }            
        }
        return true
    }

    getData(){
        return this.matrix;
    }
    /*Optional
    getDiagonal(){
        
    }*/
}

(function(){
    m = new Matrix(3,3)
    console.log(m.initRandom())
    console.log(m.getRow(1))
    console.log(m.getCol(1))
    console.log(m.isSquared())
    console.log(m.isSymmetric())
    console.log(m.isIdentity())    
})()

/*Symmetric
m.getRow(1).setVal(0,3)
m.getRow(0).setVal(1,3)

m.getRow(2).setVal(0,8)
m.getRow(0).setVal(2,8)

m.getRow(2).setVal(1,9)
m.getRow(1).setVal(2,9)
*/

/*Identity
m.getRow(1).setVal(0,0)
m.getRow(0).setVal(1,0)

m.getRow(2).setVal(0,0)
m.getRow(0).setVal(2,0)

m.getRow(2).setVal(1,0)
m.getRow(1).setVal(2,0)

m.getRow(0).setVal(0,1)
m.getRow(1).setVal(1,1)
m.getRow(2).setVal(2,1)
*/