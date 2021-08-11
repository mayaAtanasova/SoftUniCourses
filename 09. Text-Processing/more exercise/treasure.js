function find(input) {
    let key = input.shift().split(' ').map(Number);
    let line = input.shift();
    while (line != 'find') {
        let result = [];
        let j = 0;
        for (let i = 0; i < line.length; i++) {
            result[i] = String.fromCharCode(line.charCodeAt(i) - key[j]);
            j++;
            if (j >= key.length) {
                j = 0;
            }
        }
        result = result.join('');
        let stName = result.indexOf('&');
        let endName = result.lastIndexOf('&');
        let type = result.substring(stName + 1, endName);
        let stCoord = result.indexOf('<');
        let endCoord = result.indexOf('>');
        let coord = result.substring(stCoord + 1, endCoord);
        console.log(`Found ${type} at ${coord}`);
        line = input.shift();
    }
}
find([
'1 4 2 5 3 2 1',
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
'find'
])