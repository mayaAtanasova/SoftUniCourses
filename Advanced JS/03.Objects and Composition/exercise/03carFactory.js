function orderCar(carOrder) {
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
        
    };

    const model = carOrder.model;
    let engine = {};
    if(carOrder.power <= 90){
        engine = engines.small;
    }else if(carOrder.power <= 120){
        engine = engines.normal;
    }else {
        engine = engines.monster;
    }

    const carriage = {
        type: carOrder.carriage,
        color: carOrder.color,
    };

    let wheelSize = Math.floor(carOrder.wheelsize);
    if (wheelSize % 2 === 0){
        wheelSize = wheelSize - 1;
    }

    const wheels = [];
    for (let i = 0; i < 4; i++){
        wheels.push(wheelSize);
    }

    return {
        model,
        engine,
        carriage,
        wheels
    };

}

console.log(orderCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));