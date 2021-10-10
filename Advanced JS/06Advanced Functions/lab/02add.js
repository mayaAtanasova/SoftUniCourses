function solution(n) {
    return function (i) {
        return n + i;
    };
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
