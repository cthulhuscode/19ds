function factorial(num){
    var fact = 1;
    for(var k = 1; k < num; k++){
        fact += fact * k;
    }
    return fact;
}

var sumF = 0;
let x = 1
for(let t = 0; t <= 100; t++){//
    sumF = sumF + Math.pow(x,t)/factorial(t);
}

console.log('Sumatoria x^i/i! = ' + sumF)

/*
var sumE = 0;
for(let i = 0; i <=10; i++){//Con número de Euler
    console.log(sumE)
    sumE = sumE + Math.pow(Math.E,i);
}

console.log('Sumatoria E^x = ' + sumE)
*/

