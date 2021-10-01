function solve() {
  let output = document.querySelectorAll('textarea')[1];
  
  const btns = document.getElementsByTagName('button');
  const genBtn = btns[0];
  const buyBtn = btns[1];
  genBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', shop);
  
  function generate() {
    let input = JSON.parse(document.querySelectorAll('textarea')[0].value.trim());
    input.forEach(item => {
      const newRow = document.createElement('tr');

      const imgCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const priceCell = document.createElement('td');
      const dfCell = document.createElement('td');
      const checkBoxCell = document.createElement('td');


      const image = document.createElement('img');
      image.src = item.img;
      imgCell.appendChild(image);

      const prodName = document.createElement('p');
      prodName.textContent = item.name;
      nameCell.appendChild(prodName);

      const prodPrice = document.createElement('p');
      prodPrice.textContent = Number(item.price);
      priceCell.appendChild(prodPrice);

      const prodDF = document.createElement('p');
      prodDF.textContent = item.decFactor;
      dfCell.appendChild(prodDF);

      const chBox = document.createElement('input');
      chBox.type = 'checkbox';
      checkBoxCell.appendChild(chBox);

      newRow.appendChild(imgCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(priceCell);
      newRow.appendChild(dfCell);
      newRow.appendChild(checkBoxCell);


      document.getElementsByTagName('tbody')[0].appendChild(newRow);
    });
  }

  function shop(ev) {
    const cart = [];
    let totPrice = 0;
    let totDecFactor = 0;
    const checkedBoxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
    console.log(checkedBoxes);
    checkedBoxes.forEach(box => {
      const currRow = box.parentNode.parentNode;
      const data = currRow.querySelectorAll('p');
      cart.push(data[0].textContent);
      totPrice += Number(data[1].textContent);
      totDecFactor += Number(data[2].textContent);
    });
    output.value = `Bought furniture: ${cart.join(', ')}\nTotal price: ${totPrice.toFixed(2)}\nAverage decoration factor: ${totDecFactor/cart.length}`;
  }
}