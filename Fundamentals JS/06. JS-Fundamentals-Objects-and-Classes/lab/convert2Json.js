function convertToJson(name, lastName, hairColor){
    let obj = {
        name, 
        lastName, 
        hairColor
    }

    let myJson = JSON.stringify(obj)
    console.log(myJson);
}

convertToJson('George', 'Jones', 'Brown')
