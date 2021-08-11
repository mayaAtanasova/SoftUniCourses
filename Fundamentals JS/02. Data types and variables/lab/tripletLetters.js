function letters(n){
    let result = "";
    let let1 = "";
    let let2 = "";
    let let3 = "";
    for (let i = 0; i < n; i++){
        let1 = String.fromCharCode(97 + i)
        for(let j = 0; j < n; j++){
            let2 =  String.fromCharCode(97 + j)
            for(let k = 0; k < n; k++){
                let3 = String.fromCharCode(97 + k)
                result = let1 + let2 + let3;
                console.log(result);
                result = ""
                
            }
            
        }
    }
}
letters(3);