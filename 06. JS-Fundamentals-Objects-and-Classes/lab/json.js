function convertJson(jsonString){
    let parsed = JSON.parse(jsonString);
    // let entries = Object.entries(parsed);
    for (let [key, value] of Object.entries(parsed)){
        console.log(`${key}: ${value}`);
    }
}

convertJson('{"name": "George", "age": 40, "town": "Sofia"}')