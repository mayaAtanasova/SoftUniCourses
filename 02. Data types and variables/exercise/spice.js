function spice(startingYield){
    let days = 0;
    let totalSpice = 0;
    let yield = startingYield;

    while (yield >= 100){
        days += 1;
        totalSpice += yield;
        totalSpice -= 26;
        yield -= 10;
    }
    if(totalSpice >= 26){
    totalSpice -= 26;
    }
    console.log(days);
    console.log(totalSpice);
}

spice(111);