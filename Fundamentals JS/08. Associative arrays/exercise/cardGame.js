function play(input) {
    let playerMap = new Map();
    input.forEach(player => {
        let [name, hand] = player.split(': ');
        hand = hand.split(', ');
        let handSet = new Set(hand);
        
        if (!playerMap.has(name)){
            playerMap.set(name, handSet);
        }else{
            handSet = playerMap.get(name);
            handSet = new Set([...handSet, ...hand]);
            playerMap.set(name, handSet);
        }
    });
    let calculations = Array.from(playerMap);
    calculations.forEach(player => {
        let score = [];
        let scoreTable = Array.from(player[1]);
        scoreTable = scoreTable.forEach(el => {
            el = calculateScore(el);
            score.push(el);
        })
        score = score.reduce((a,b) => a+b);
        console.log(`${player[0]}: ${score}`);
    })
    function calculateScore(card){
        card = card.split('')
        let type = card.pop();
        let power = card.join('');
        if(!isNaN(power)){
            power = Number(power);
        }else if(power == 'J'){
            power = 11;
        }else if(power == 'Q'){
            power = 12;
        }
        else if(power == 'K'){
            power = 13;
        }else if(power == 'A'){
            power = 14;
        }
        if (type == 'S'){
            type = 4;
        }else if(type == 'H'){
            type = 3;
        }else if(type == 'D'){
            type = 2;
        }else if(type == 'C'){
            type = 1;
        }
        return power * type;
    }
}
play([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])