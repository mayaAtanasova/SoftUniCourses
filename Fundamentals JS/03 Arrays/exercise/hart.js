function hart(input){
let nrhood = input.shift().split('@');
// console.log(nrhood);
let index = 0;
let jumpCommand = input[index];
let cupidPos = 0;
let houseCount = nrhood.length;

while (jumpCommand != 'Love!'){
    let jumpLen = Number(jumpCommand.split(' ')[1]);
    // console.log(jumpLen);
    if (cupidPos + jumpLen > nrhood.length-1){
        cupidPos = 0;
        // if cupid jumed at teh beginning of the neighborhood 
        // check the situation in the first house:
        if (nrhood[cupidPos] == 0){
            console.log(`Place ${cupidPos} already had Valentine's day.`);
        }else{
            nrhood[0] -= 2;
            if (nrhood[0] == 0){
                console.log(`Place ${cupidPos} has Valentine's day.`);
                houseCount -= 1;
            }
        }
    }else{
        cupidPos += jumpLen;
        // check if hte house already had Val's day:
        if (nrhood[cupidPos] == 0){
            console.log(`Place ${cupidPos} already had Valentine's day.`);
        }else{
            nrhood[cupidPos] -= 2;  
            if (nrhood[cupidPos] == 0){
                console.log(`Place ${cupidPos} has Valentine's day.`);
                houseCount -= 1;
            }
        }
    }
    index ++;
    jumpCommand = input[index];
}
console.log(`Cupid's last position was ${cupidPos}.`);
if (houseCount == 0){
    console.log('Mission was successfull.');
}else{
    console.log(`Cupid has failed ${houseCount} places.`);
}
}

hart(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8','Jump 3','Jump 1', 'Love!'])