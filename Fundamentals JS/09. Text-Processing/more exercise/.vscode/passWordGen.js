function genPass(input) {
    let [p1, p2, source] = input;
    source = source.toLocaleUpperCase();
    let pass = (p1 + p2).toLocaleLowerCase();
    let j = 0;
    for(let i = 0; i < pass.length; i++){
        if (isVowel(pass[i])){
            pass = pass.replace(pass[i], source[j]);
            j++;
            if (j > source.length - 1){
                j = 0;
            }
        }
    }

    function isVowel(x){
        let bool = x == 'a' || x == 'e' ||x == 'i' ||
        x =='o' || x == 'u';
        return bool;
    }

    console.log(`Your generated password is ${pass.split('').reverse().join('')}`);
}

genPass([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]    
    )