//O(n^2 + n)
function gcd(a,b){
    let maxA = [];
    let maxB = [], num = 0;
    if(a == b){
        return a;
    }
    else{
        for(let i = 0; i <= a; i++){
            if(a % i == 0)
                maxA.push(i);
            if(b % i == 0)
                maxB.push(i);
        }
    }
    for(let t = 0; t < maxA.length; t++){
        for(let r = 0; r < maxB.length; r++){
            if(maxA[t] == maxB[r] && num < maxA[t])
                num = maxA[t];
        }
    }
    return num;
}