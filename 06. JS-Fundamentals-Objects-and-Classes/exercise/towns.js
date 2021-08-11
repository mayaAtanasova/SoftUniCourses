function townMaker(input){
    for(item of input){
        let [town, lat, lon] = item.split(' | ');
        latitude = Number(lat).toFixed(2);
        lon = Number(lon).toFixed(2);

        let townObj = {
            town,
            latitude,
            longitude
        }
        console.log(townObj);
    }
}
townMaker(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])