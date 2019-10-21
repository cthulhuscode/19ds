//O(n^2)
function isEven(n){
    if(n % 2 === 0)
      return true;
    else
      return false;
}

function getLength(num){
    return num.toString().length;
}

function primes(lim){
    let primes = [], c, lim2
    if(getLength(lim) == 1)
        lim2 = (lim * 100) / 2;
    else if(getLength(lim) >= 2)
        lim2 = lim * 100;


    for(let i = 2; primes.length != lim; i++){
        c = 0;
        for(let t = 0; t <= lim2; t++){
            if(i % t == 0)
                c++;
            if(c > 2)
                break;
        }
        if(c==2)
            primes.push(i)
    }
    return primes[lim - 1];
}

console.log(primes(5))

