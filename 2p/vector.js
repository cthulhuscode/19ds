//class Vector{
module.exports = class Vector{
    constructor(arr){
        this.vec = arr; //Array de números
    }

    initialize(valor, cantidad){//Inicializar arreglo con el valor ingresado
        for(let i = 0; i < cantidad; i++){
            this.vec[i] = valor;
        }
    }

    min(){//Regresar el valor mínimo
        //Método del maestro
        let t = this.vec[0];
        for(let x of this.vec){
            if(t > x)
                t=x;
        }
        return t;
    }

    max(){//Regresar el valor máximo
        let t = this.vec[0]
        for(let x of this.vec){
            if(t < x)
                t=x;
        }
        return t;
    }

    sumVec(vec){//utilizar clase Vector
        if(vec.length == this.vec.length){
            for(let x in vec){
                vec[x] = vec[x] + this.vec[x];
            }
            return vec;//Regresar el array ingresado, no modificar el original
        }
    }

    subtVec(vec){
        if(vec.length == this.vec.length){
            for(let x in vec){
                vec[x] = this.vec[x] - vec[x];
            }
            return vec;
        }
    }

    mulVec(vec){
        if(vec.length == this.vec.length){
            for(let x in vec){
                vec[x] = vec[x] * this.vec[x];
            }
            return vec;
        }
    }

    innerSum(){//Sumar los valores
        let sum = 0;
        for(let a of this.vec)
             sum += a;

        return sum;
    }

    innerAvg(){//Sacar promedio
        let sum = 0;
        for(let x of this.vec)
            sum += x;

        return sum/this.vec.length;
    }

    vectorize(inicio, fin, cantidad){//Vectorizar (0,1,10) del 0 al 1 quiero 10 puntos .1
        let distancia = fin - inicio;
        let aumento = distancia/cantidad;
        let pts =  new Array(cantidad);

        let k = 0;
        for(let i = 0; i < fin; i += aumento){//mal
            pts[k] = i;
            k++;
            //pts.push() ingresar valor al final del arreglo
        }

        /*//Código maestro
        let i = (1-0)/10;
        for(var x of arr){
            
        }*/

        //No regresar un nuevo vector
        return pts;
    }

    getVal(n){
        return this.vec[n];
    }

    setVal(column,value){
        this.vec[column] = value;
    }

    getVec(){//Regresa valor del array
        return this.vec;
    }
}

/*
(function(){
    v = new Vector([1,1,1,1])
    console.log(v.sumVec([4,4,4,4]))
    console.log(v.subtVec([3,3,3,3]))
    console.log(v.mulVec([2,3,4,5]))
})()
*/