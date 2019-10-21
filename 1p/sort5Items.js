//O(n^2)
let vec = [5,7,3,8,2], aux = 0;
console.log(vec)

for(let t = 0;  t < vec.length; t++){
    for(let k = 0; k < vec.length-1; k++){
        if(vec[t+1] <= vec[k]){
            aux = vec[t+1];
            vec[t+1] = vec[k]
            vec[k] = aux
        }
    }
}

console.log(vec)   