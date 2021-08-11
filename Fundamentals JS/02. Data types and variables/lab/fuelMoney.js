function fuelMoney(distance, passengers, unitPrice){
    let consumption = (distance/100) * 7 + passengers * 0.1;
    let money = consumption * unitPrice;

    console.log(`Needed money for that trip is ${money}lv.`);
}

fuelMoney(90, 14, 2.88)