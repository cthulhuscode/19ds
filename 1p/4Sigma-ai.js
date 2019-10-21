var n = 10, s = 0, a = 5;
for(var i = 0; i <= n; i++){
    s += Math.pow(a,i);
}

//console.log('Fórmula: ' + (((a**(n+1)-1)/(a-1))));
console.log('Sumatoria: ' + s)
let val = (Math.pow(a, (n +1 )) - 1) / (a - 1);
console.log('Formula: ' + val)
console.log(((val*100)/s)+'% aprox')