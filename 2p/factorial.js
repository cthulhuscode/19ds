class Factorial{
    constructor(n){
        this.cost = 0;
        this.pos = n;
        this.val = this.getValue(n)
    }

    getValue(n=this.pos){
        this.cost++;
        if(n == 0)
            return 1
        return (n * this.getValue(n-1))
    }    
    
    getCost(n=this.pos){
        this.cost = 0;
        this.getValue(n)
        return this.cost;
    }

    getSuccesion(n=this.pos){
        let succesion = []
        for(let i = 0; i <= n; i++)
            succesion.push(this.getValue(i))
        return succesion
    }

    getTable(n=this.pos){
        let table = [];
        let tCost = this.getCost(n)

        table[0] = []
        table[1] = []

        for(let i = 0; i < tCost; i++)
            table[0].push(i+1);

        table[1] = this.getSuccesion(n)
        return table;
    }
}

(function(){
    let f = new Factorial(5)
    console.log(f.getValue())
    console.log(f.getCost())
    console.log(f.getSuccesion())
    console.log(f.getTable())
})()
