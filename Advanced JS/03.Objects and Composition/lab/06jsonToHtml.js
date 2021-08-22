function convert(json) {
    let arr = JSON.parse(json);//[{Name: 'Rumen', Score: 6}, {}]
    let outputCodeArr = ['<table>'];
    outputCodeArr.push(makeHeadRow(arr));
    arr.forEach(el => {
        outputCodeArr.push(makeTableRow(el));
    })
    outputCodeArr.push('</table>');
    //functions
    console.log(outputCodeArr.join('\n'));
    function makeHeadRow(arr) {
        let headRow = ['   <tr>'];
        let keys = Object.keys(arr[0]).map(key => '<th>' + key + '</th>').join('');
        headRow.push(keys, '</tr>');
        headRow = headRow.join('');
        return headRow;
    }
    function makeTableRow(arr) {
        let tableRow = ['   <tr>'];
        let values = Object.values(arr).map(value => '<td>' + value + '</td>').join('');
        tableRow.push(values, '</tr>');
        tableRow = tableRow.join('');
        return tableRow;
    }
    function escapeHtml(value) {
        return value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

convert('[{"Name":"Pesho", "Score":4, " Grade":8}, {"Name":"Gosho", "Score":5, " Grade":8}, {"Name":"Angel", "Score":5.50, " Grade":10}]')