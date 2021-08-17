function sumNrs(n, m) {
    n = Number(n);
    m = Number(m);
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}

sumNrs('1', '5')
sumNrs('-8', '20')