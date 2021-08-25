function townify(arr){
let result = [];
arr.shift();
arr.forEach(el =>{
        let myObj = {}
        let [empty,town, lat, lon] = el.split(/\ *\|\ */)
        .map(x => isNaN(x) ? x : +Number(x).toFixed(2));
        myObj['Town'] = town;
        myObj['Latitude'] = lat;
        myObj['Longitude'] = lon;
        result.push(myObj);
    })
    console.log(JSON.stringify(result));
}

townify(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)