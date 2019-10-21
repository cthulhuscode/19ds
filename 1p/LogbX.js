
for(var i = 1; i <= 10; i++){
    console.log('Log2('+i+'): '+Math.log2(i));
}

for(var i = 1; i <= 10; i++){
    console.log('Log2('+i+'): '+Math.log2(i));
    console.log('2^'+Math.log2(i)+'= '+Math.pow(2,Math.log2(i)));
    console.log('\n');
}