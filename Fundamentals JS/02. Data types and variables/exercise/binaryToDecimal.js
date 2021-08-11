function binToDec(binNr){
    let str = Number(binNr).toString();
    let decNr = 0;
    let power = str.length-1;

    for (let i = 0; i <= power; i++){
        decNr += Number(str[i]) * Math.pow(2, power-i);
    }
    console.log(decNr);
}

binToDec('00001001')