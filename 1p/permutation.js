function factorial(num){
    var fact = 1;
    for(var k = 1; k < num; k++){
        fact += fact * k;
    }
    return fact;
}

function permutation(n, r){
    let res = factorial(n) / factorial(n-r);
    return res;
}

console.log(permutation(6, 2))