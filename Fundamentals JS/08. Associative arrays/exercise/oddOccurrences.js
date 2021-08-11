function oddOccurrences(input){
let items = input.split(' ').map(a => a.toLowerCase());
let map = new Map();
let count = 0;
items.forEach(item => {
    if(map.has(item)){
        count = map.get(item) + 1;
        map.set(item, count);
    }else{
        count = 1;
        map.set(item, count);
    }
});
let result = [];
let filtered = Array.from(map).filter(x => x[1] % 2 == 1).forEach(line => {
    result.push(line[0]);
})
console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')