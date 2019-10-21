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

function combination(n, r){
    let res = permutation(n, r) / factorial(r);
    return res;
}

console.log(combination(6,2))