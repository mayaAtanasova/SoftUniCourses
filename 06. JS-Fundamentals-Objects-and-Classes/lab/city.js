function tourCity(obj){
    for (let key of Object.keys(obj)){
    console.log(`${key} -> ${obj[key]}`);
    }
}

tourCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)