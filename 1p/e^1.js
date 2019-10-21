function factorial(num){
    var fact = 1;
    for(var k = 1; k < num; k++){
        fact += fact * k;
    }
    return fact;
}

var sumF = 0;
for(let t = 0; t <= 10; t++){//
    sumF = sumF + 1/(factorial(t));
}

console.log('Sumatoria i/i! = ' + sumF)