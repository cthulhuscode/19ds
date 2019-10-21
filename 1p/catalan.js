function factorial(num){
    var fact = 1;
    for(var k = 1; k < num; k++){
        fact += fact * k;
    }
    return fact;
}

function permutation(n, r){
    return factorial(n) / factorial(n-r);
}

function combination(n, r){
    return (permutation(n, r) / factorial(r));
}

function catalan(n){
    return combination(2*n,n) / (n+1)
}

console.log(catalan(20))