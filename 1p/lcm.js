//O(n^2 + n)
function lcm(a,b){
    let maxA = [];
    let maxB = [], num = 1, flag = true;
    if(a == b){
        return a;
    }
    else{
        for(let i = 1; i <= 100; i++){
                maxA.push(a*i);
                maxB.push(b*i);
        }
    }
    for(let t = 0; t < maxA.length && flag == true; t++){
        for(let r = 0; r < maxB.length; r++){
            if(maxA[t] == maxB[r]){
                num = maxA[t]; 
                flag = false;
            }
                
        }
    }
    return num;
}
