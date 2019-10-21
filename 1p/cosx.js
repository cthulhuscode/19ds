function alt(i){
    if(i % 2 == 0)
        return 1;
    else
        return -1;
}

function factorial(num){
    var fact = 1;
    for(var k = 1; k < num; k++){
        fact += fact * k;
    }
    return fact;
}

let sum = 0, x = 5
for(let i = 0, t = 0; t <= 10; i+=2, t++)
    sum += alt(t) * (Math.pow(x,i)/factorial(i));
    debugger;

console.log('Resultado fórmula = ' + sum + ' degrees')
console.log('Math.Cos(' + x + ') = ' + Math.cos(x) + ' rads')