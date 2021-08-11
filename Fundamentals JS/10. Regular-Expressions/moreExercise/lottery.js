function lottery(input) {
    let ticketPattern = /[^, ]+/g;
    let tickets = input.match(ticketPattern).forEach(ticket => {
        if (ticket.length !== 20) {
            console.log('invalid ticket');
        } else {
            let winPattern = /(@{6,})|(#{6,})|(\${6,})|(\^{6,})/;
            let leftMatch = ticket.slice(0, 10).match(winPattern);
            let rightMatch = ticket.slice(10).match(winPattern);

            if (leftMatch == null || rightMatch == null) {
                console.log(`No match - ${ticket}" - no match`);
            } else {
                leftMatch = leftMatch[0];
                rightMatch = rightMatch[0];
                if (leftMatch.length != rightMatch.length) {
                    console.log(`No match - ${ticket}" - no match`);
                }else{
                    if(leftMatch.length == 10){
                        console.log(`ticket "${ticket}" - ${leftMatch.length}${leftMatch[0]} Jackpot!`);
                    }else{
                        console.log(`ticket "${ticket}" - ${leftMatch.length}${leftMatch[0]}`);
                    }
                }
            }

            // console.log(leftMatch.length, rightMatch.length);
        }
    });
}

lottery('validticketnomatch:(')