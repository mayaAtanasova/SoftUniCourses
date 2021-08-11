function wordsTracker(input){
let wordsToFind = input.shift().split(' ');
// console.log(wordsToFind);
let map = new Map();
let count = 0;
wordsToFind.forEach(word =>{
    map.set(word, count);
})

input.forEach(word => {
    if(wordsToFind.includes(word)){
        if(map.has(word)){
            count = map.get(word);
            count++;
            map.set(word, count);
        }
    }
});
let sorted = Array.from(map).sort((a,b) => b[1] - a[1]).forEach(line => {
    console.log(`${line[0]} - ${line[1]}`);
});
}
wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]    
    )