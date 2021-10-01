function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const newOption = document.createElement('option');
    if(newItemText.value != '' && newItemValue != ''){
        newOption.textContent = newItemText.value;
        newOption.value = newItemValue.value;
        document.getElementById('menu').appendChild(newOption);
        newItemText.value = '';
        newItemValue.value = '';
    }
}