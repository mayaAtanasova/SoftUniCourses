function solve() {

    let input = Number(document.getElementById('input').value);
    

    function convertToBinary(nr) {
        let result = [];
        while (Math.floor(nr / 2 > 0)) {
            let base = Math.floor(nr / 2);
            result.push(nr % 2);
            nr = base;
        }
        return (result.reverse().join(''));
    }

    function convertToHex(nr){
        let result = [];
        while(Math.floor(nr / 16 > 0)){
            let base = Math.floor(nr / 16);
            result.push(nr % 16);
            nr = base;
        }
        result = result.map(x => x < 10 ? x :
            x == 10 ? 'A' :
            x == 11 ? 'B' :
            x == 12 ? 'C' :
            x == 13 ? 'D' :
            x == 14 ? 'E' :
            'F');
        return result.reverse().join('');
        }
        if(document.getElementById('selectMenuTo').value == 'binary'){
            document.getElementById('result').value = convertToBinary(input);
        }
        if(document.getElementById('selectMenuTo').value == 'hex'){
            document.getElementById('result').value = convertToHex(input);
        }
}