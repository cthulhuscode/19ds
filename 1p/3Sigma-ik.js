var n = 10, s = 0, k = 5;
for(var i = 1; i <= 10; i++){
    s += i**k;
}

console.log('Sumatoria: ' + s)
console.log('Fórmula: ' + ((1/(k+1))*(n**(k+1))));
var val = ((1/(k+1))*(n**(k+1)));
console.log(((val*100)/s)+'% aprox')