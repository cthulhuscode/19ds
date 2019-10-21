function getLogBX(base, numero){
    return (Math.log(numero)/Math.log(base))
}

for(var i = 1; i <= 10; i++){
    console.log('Log7('+i+')= ' + getLogBX(7, i))
}