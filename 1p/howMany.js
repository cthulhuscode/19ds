let v1 = [90,7,9,7,9]

function howMany(v1){
    v2 = v1;
    let repeatedVal = [], howMany = [], index1 = [], index2 = [];
    for(let i = 0; i < v1.length; i++){
        count = 0;
        for(let k = 0; k < v2.length; k++){
            if(v1[i] == v2[k] && i != k && index2[i] != i && index1[k] != k){
                count++;
                index1[i] = i
                index2[k] = k
            }            
        }
        repeatedVal.push(v1[i])    
        howMany.push(count)
    }
    let matrix = []
    for(let t = 0; t < repeatedVal.length; t++){
        if(howMany[t] != 0 && !isNaN(howMany[t]) && typeof howMany[t] === 'number'){
            matrix.push([repeatedVal[t], howMany[t]+1])
        }
    }
    return matrix;
}
console.log(howMany(v1))
