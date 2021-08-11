function findHash(str){
    let arr = str.split(' ');

    arr.forEach(el => {
        if(el[0] == '#'){
            w = el.slice(1, el.length);
            if (!/[^a-zA-Z]/.test(w)){
                console.log(w);
            }
        }
    });
}

findHash('Nowadays everyone uses # to tag a #special word in #socialMedia')