function getFibonator() {
    let n1 = 1, n2 = 0;  
    return () => {
        let next = n1 + n2;
        n1 = n2;
        n2 = next;
        return next;        
};
}
let fib = getFibonator();
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
