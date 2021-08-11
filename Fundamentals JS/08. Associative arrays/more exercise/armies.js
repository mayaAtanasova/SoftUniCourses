function war(input) {
    let pool = {};
    input.forEach(line => {
        if (line.includes('arrives')) {
            let leader = line.replace(' arrives', '');
            pool[leader] = {};
        }
        if (line.includes(':')) {
            line = line.split(': ');
            let leader = line.shift();
            let [armyName, armyCount] = line.join('').split(', ');
            if (pool.hasOwnProperty(leader)) {
                pool[leader][armyName] = Number(armyCount);
            }
        }
        if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');
            let searchArr = Object.entries(pool);
            // console.log(searchArr);
            let index = searchArr.findIndex(x => x[1].hasOwnProperty(armyName));
            if (index != -1) {
                let leader = searchArr[index][0];
                pool[leader][armyName] += Number(armyCount);
            }
        }
        if (line.includes('defeated')) {
            let leader = line.replace(' defeated', '');
            delete pool[leader];
        }
    });
    let sortArr = Object.entries(pool).map(function(element){
        element.push(Object.values(element[1].reduce((a,b) => a+b)))})
        .sort((a, b) => b[2] - a[2])
        .forEach(r => {
        console.log(`${r[0]}: ${r[2]}`);
        let armies = Object.entries(r[1]).sort((x, y) => y[1] - x[1]).forEach(a =>{
        console.log(`>>> ${a[0]} - ${a[1]}`);
        });
        
    })
    function rate(obj){
        let rating = Object.values(obj).reduce((a, b) => a + b, 0);
        return rating;
    }
}
war(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])