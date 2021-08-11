function viralAdvertising(n) {
let ppl = 5;
let liked = 0;

for (let i = 1; i <= n; i++){
    let dailyLikes = Math.floor(ppl/2);
    liked += dailyLikes
    ppl = dailyLikes * 3;
}
return liked;
}

viralAdvertising(5)