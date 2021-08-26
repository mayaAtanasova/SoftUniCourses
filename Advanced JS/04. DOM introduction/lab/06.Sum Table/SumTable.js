function sumTable() {
    let lastCols = Array.from(document.querySelectorAll('table tr td:nth-last-child(1):not(#sum)'));
    let result = lastCols.map(x => Number(x.textContent)).reduce((a, b) => a + b);
    document.getElementById('sum').textContent = result;
}