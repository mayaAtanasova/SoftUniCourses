function starify(n){
    if(n === undefined){
        n = 5;
    }
    for (let i = 0; i < n; i++){
        console.log('* '.repeat(n));
    }
}

starify(2)