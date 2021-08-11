function blackflag(input){
    
    let [days, dailyPlunder, expPlunder] = input.map(Number);
    let gain = 0;
for (let i = 1; i <= days; i++){
    gain += dailyPlunder;
    if (i % 3 == 0){
        gain += dailyPlunder * 0.5;
    }
    if(i % 5 == 0){
        gain *= 0.7;
    }
}
if (gain >= expPlunder){
    console.log(`Ahoy! ${gain.toFixed(2)} plunder gained.`);
}else{
    console.log(`Collected only ${((gain/expPlunder)*100).toFixed(2)}% of the plunder.`);
}
}
blackflag([ '10', '20', '380' ]
)