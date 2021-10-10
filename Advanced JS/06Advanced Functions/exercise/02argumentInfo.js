function argumentInfo(...args) {
    const counter = {};
    console.log(args.map(a => `${typeof a}: ${a}`).join('\n'));
    args.forEach(x => { counter[typeof x] = (counter[typeof x] || 0) + 1; });
    const resultCount = Object.entries(counter).sort((a, b) => b[1] - a[1]).forEach(entry => {
        console.log(`${entry[0]} = ${entry[1]}`);
    });
}
/* 
function argumentInfo() {
    let typeCounts = {};
    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(! typeCounts[typeof(arg)]){
            typeCounts[typeof(arg)] = 1;
        } else {
            typeCounts[typeof(arg)]++;
        }
    }
 
    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(k => console.log(`${k} = ${typeCounts[k]}`))
}
 */

argumentInfo('cat', 42, 43, 44, function () { console.log('Hello world!'); });