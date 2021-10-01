function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newLi = createElement('li', input.value);
    const delBtn = createElement('a', '[Delete]');
    delBtn.href = '#';
    delBtn.addEventListener('click', delItem);
    newLi.appendChild(delBtn);
    items.appendChild(newLi);
    input.value = '';

    function delItem(ev){
        delBtn.parentNode.remove();
    }

    function createElement(type, data){
        const myEl = document.createElement(type);
        myEl.textContent = data;
        return myEl;
    }
}