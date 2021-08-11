let arr1 = [1, 'next1', 2, 'next2']
let nrs = [];
let strs = [];
arr1.forEach(el=>{
    if (arr1.indexOf(el) % 2 == 0){
        nrs.push(el);
        strs.push(el);
    }
})
console.log(strs);

