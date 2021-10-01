function addItem() {
    const inputText = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');
    newLi.textContent = inputText;
    const ulEl = document.getElementById('items');
    ulEl.appendChild(newLi);
    document.getElementById('newItemText').value = '';
}