function findHash(str) {
    let arr = str.split(' ');
    let isLetter = true;
    arr.forEach(el => {
        if (el[0] == '#') {
            w = el.slice(1, el.length);
            for (let i = 0; i < w.length; i++){
                const code = w.charCodeAt(i);
                if (code < 65 || (code >= 91 && code <= 96) || code > 122){
                    isLetter = false;
                    break;
                }
            }
            if(isLetter && w.length > 0){
                console.log(w);
            }
        }
    });
}

findHash('Nowadays everyone uses # to tag a #special word in #socialMedia')