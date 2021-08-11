function solve(input){
    input.shift();
    let barcodePattern = /(?:@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])(?:@#+)/
    input.forEach(line =>{
        let barcode = barcodePattern.exec(line);
        if(barcode == null){
            console.log('Invalid barcode');
        }else{
            let nrPattern = /\d/g;
            let prGroup = barcode[0].match(nrPattern);
            if (prGroup == null){
                prGroup = '00'
            }else{
                prGroup = prGroup.join('')
            }
            console.log(`Product group: ${prGroup}`);
        }
    })
}

solve((["6",
"@###Val1d1teM@###",
"@#VteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
)

console.log('--------------------');

solve((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

)