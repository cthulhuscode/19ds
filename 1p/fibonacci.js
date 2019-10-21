//O(n)
function fibonacci(lim){
    let vec = [];
    vec[0] = 1
    vec[1] = 1
    for(let i = 0, t = 0; i <= lim; i++, t++){
        vec.push(vec[i] + vec[i+1])
    }
    return vec[lim];
}

console.log(fibonacci(10))