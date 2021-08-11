function makeKey(input) {
    let key = input.shift();
    
    for (const line of input) {
        if (line == 'Generate'){
            console.log(`Your activation key is: ${key}`);
        }else{
            let tokens = line.split('>>>');
            let command = tokens.shift();
            if(command == 'Contains'){
                if (key.includes(tokens[0])){
                    console.log(`${key} contains ${tokens[0]}`);
                }else{
                    console.log("Substring not found!");
                }
            }if(command == 'Flip'){
                let substr = key.substring(Number(tokens[1]), Number(tokens[2]));
                if(tokens[0] == 'Upper'){
                    key = key.replace(substr, substr.toUpperCase());
                }else if(tokens[0] == 'Lower'){
                    key = key.replace(substr, substr.toLowerCase());
                }
                console.log(key);
            }if(command == 'Slice'){
                let bindex = Number(tokens[0]);
                let eindex = Number(tokens[1]);
                key = key.substring(0, bindex) + key.substr(eindex);
                //S = S.substr(0, bindex) + S.substr(eindex);
                console.log(key);
            }
        }
    }
}

makeKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
])