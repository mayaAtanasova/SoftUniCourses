function generateReport() {
    let result = [];
    let rows = document.querySelectorAll('tbody tr');
    let checkBoxesState = document.querySelectorAll('th input');
    let checkBoxStateArr = Array.from(checkBoxesState);
    let indices = checkBoxStateArr.map((x, i) => x.checked == true ? i : 'none').filter(x => x != 'none');
    for (let row of rows){
        let object = {};
        for (let index of indices){
            let type = checkBoxesState[index].name;
            let data = row.children[index].textContent;
            object[type] = data;
            console.log(1);
        }
        result.push(object);
    }
document.getElementById('output').textContent = JSON.stringify(result);
}