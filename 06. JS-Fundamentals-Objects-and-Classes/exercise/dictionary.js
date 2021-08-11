function makeDictionary(input) {
    let dict = {};
    for (let i = 0; i < input.length; i++) {
        let tempObj = JSON.parse(input[i]);
        dict = Object.assign(dict, tempObj);
    }
    let orderedDict = Object.keys(dict).sort().reduce((orderedDict, key) => {
        orderedDict[key] = dict[key];
        return orderedDict;
    }, {});
    // console.log(orderedDict);
    for (let [key, value] of Object.entries(orderedDict)){
        console.log(`Term: ${key} => Definition: ${value}`);
        // console.log(key);
    }

}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Tape":"Just a tape."}',

])