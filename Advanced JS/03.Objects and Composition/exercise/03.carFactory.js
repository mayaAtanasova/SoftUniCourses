function assembleCar(carObj) {
    let finishedCar = {};
    let engines = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    }
    let carriage = {
        hatchback: { type: 'hatchback', color: null },
        coupe: { type: 'coupe', color: null }
    }

    finishedCar.model = carObj.model;

    let requiredPower = carObj.power;

    if (requiredPower <= 90) {
        finishedCar.engine = engines['Small engine'];
    } else if (requiredPower <= 120) {
        finishedCar.engine = engines['Normal engine'];
    } else {
        finishedCar.engine = engines['Monster engine'];
    }

    let requiredCarriage = carObj.carriage;
    let requiredColor = carObj.color;

    finishedCar.carriage = {};
    finishedCar.carriage.type = requiredCarriage;
    finishedCar.carriage.color = requiredColor;

    let wheels = [];
    let requiredWheel = Math.floor(carObj.wheelsize);
    for (let i = 1; i <= 4; i++) {
        if (requiredWheel % 2 == 0) {
            wheels.push(requiredWheel - 1);
        } else {
            wheels.push(requiredWheel);
        }
    }
    finishedCar.wheels = wheels;

    return finishedCar;
}

let newCar = assembleCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);
console.log(newCar);

let expected = {
    model: 'Opel Vectra',
    engine: {
        power: 120,
        volume: 2400
    },
    carriage: {
        type: 'coupe',
        color: 'grey'
    },
    wheels: [17, 17, 17, 17]
};