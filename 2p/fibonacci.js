class Fibonacci{
    constructor(n) {
        this.pos = n;
        this.cost = 0;
    }
    getValue(n=this.pos){
        this.cost++;
        if(n < 2)
           return n
        else{
            return (this.getValue(n - 1) + this.getValue(n - 2))
        }           
    }

    getCost(n=this.pos){
        this.cost = 0;
        this.getValue(n)
        return this.cost;
    }

    leafValue(n=this.pos){
        if(n < 2)
           return n
        else{
            this.cost++;
            return (this.getValue(n - 1) + this.getValue(n - 2))
        }    
    }

    getCostTable(n=this.pos){
        let costTable = []
        for(let i = 1; i <= n; i++){
            this.cost = 0;
            this.getValue(i)
            costTable.push(this.cost)
        }                
        return costTable
    }

    getSuccesion(n=this.pos){
        let succesion = []
        for(let i = 1; i <= n; i++)
            succesion.push(this.getValue(i))
        return succesion
    }
    getTable(n=this.pos){
        let table = [];
        table[0] = this.getCostTable(n)
        table[1] = this.getSuccesion(n)
        return table;
    }
}

(function(){
    let f = new Fibonacci(6)
    console.log('Valor = ' + f.getValue())
    console.log('Costo = ' + f.getCost())
    console.log('Sucesión: ' + f.getSuccesion())
    console.log(f.getTable())
})()