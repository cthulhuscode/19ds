let v1 = [90,3,9,7,9]

function repeated(v1){
    v2 = v1;
    let repeated = false;
    for(let i = 0; i < v1.length; i++){
        for(let k = 0; k < v2.length; k++){
            if(v1[i] == v2[k] && i != k){
                repeated = true;
                break;
            }                
        }
    }
    return repeated;
}

console.log(repeated(v1));