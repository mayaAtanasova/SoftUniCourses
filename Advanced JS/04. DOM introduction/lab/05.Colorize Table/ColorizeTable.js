function colorize() {
    let rows = document.querySelectorAll('tr:nth-child(even)');
    rows = Array.from(rows).forEach(row => {
        row.style.background = 'teal';
    })
}