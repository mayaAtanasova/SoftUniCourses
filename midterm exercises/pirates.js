function plundering(input){
    let [days, dailyPlunder, expPlunder] = input;
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++){
        if(i % 3 == 0){
            totalPlunder += dailyPlunder *1.5;
        }else if(i % 5 == 0){
            totalPlunder += dailyPlunder;
            totalPlunder *= 0.7;
        }else{
            totalPlunder += dailyPlunder;
        }
    }
    if(totalPlunder >= expPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percentage = totalPlunder/expPlunder*100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
plundering([10, 20, 380])