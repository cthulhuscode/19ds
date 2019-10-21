function alt(i){
    if(i % 2 != 0)
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

var sumF = 0, x = 5;
for(let t = 0, i=1; t <= 10; t++,i=i+2)
    sumF = sumF + alt(t) * Math.pow(x,i)/factorial(i);

sumF = sumF * -1;
console.log('Resultado fórmula = ' + sumF + ' degrees')
console.log('Math.Sen(' + x + ') = ' + Math.sin(x) + ' rads')
