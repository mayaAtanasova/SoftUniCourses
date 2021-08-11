function matchNr(phoneNr){
let pattern = /\+359( |-)2\1[0-9]{3}\1[0-9]{4}\b/g;
let match = pattern.exec(phoneNr);
let result = [];

while(match != null){
    result.push(match[0]);
    match = pattern.exec(phoneNr);
}
console.log(result.join(', '));
}

matchNr('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222')