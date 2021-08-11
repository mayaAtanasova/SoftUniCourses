let ticketsPattern = /[^, ]+/g;
let winPattern = /[@+#+\$^]+/
let ticket = 'validticketnomatch:(';
let firstHalf = ticket.match(ticketsPattern)[0].slice(0, 10).match(winPattern)
// [0]
console.log(firstHalf);