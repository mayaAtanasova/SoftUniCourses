function win(input){
let pattern = /(?<ticket>[^,\ ]+)/g;
let iterator = input.matchAll(pattern);
let tickets = [];
for (let item of iterator){
    tickets.push(item[0]);
}
tickets.forEach(ticket => {
    validate(ticket);
})
function validate(ticket){
    if(ticket.length != 20){
        console.log('invalid ticket');
    }else{
        let left = ticket.substring(0, 10);
        let right = ticket.substring(10);
        let winPattern = /([@#\$\^]{6,})/;
        let matchLeft = left.match(winPattern);
        let matchRight = right.match(winPattern);
        if(matchLeft == null || matchRight == null || matchLeft[0][0] != matchRight[0][0]){
            console.log(`ticket "${ticket}" - no match`);
        }else{
            matchLeft = matchLeft[0];
            matchRight = matchRight[0];
            let len = Math.min(matchLeft.length, matchRight.length);
            if(len < 10){
                console.log(`ticket "${ticket}" - ${len}${matchLeft[0]}`);
            }else{
                console.log(`ticket "${ticket}" - ${len}${matchLeft[0]} Jackpot!`);
            }
        }
    }
}
}

win('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
console.log('-----------');
win('Cash$$$$$$Ca$$$$$$sh')
console.log('--------------------');
win('validticketnomatch:(,   12#######12^^^^^^^#1, 11$$$$$$$$22$$$$$$$2')