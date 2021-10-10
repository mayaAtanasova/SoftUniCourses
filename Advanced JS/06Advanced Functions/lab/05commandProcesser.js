function solution(){
    let str = '';
    return {
        append: (string) => str += string,
        removeStart: (n) => str = str.slice(n),
        removeEnd: (n) => str = str.slice(0, -n),
        print: () => console.log(str),
    };
    
}

let firstZero = solution();
// let secondZero = solution();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

// secondZero.append('hello');
// secondZero.append('again');
// secondZero.removeStart(3);
// secondZero.removeEnd(4);

firstZero.print();
// secondZero.print();
