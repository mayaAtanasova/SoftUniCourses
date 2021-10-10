function notify(message) {
  let mesBox = document.getElementById('notification');
  mesBox.style.display = 'block';
  mesBox.textContent += message;
  mesBox.addEventListener('click', () =>{
    mesBox.style.display = 'none';
    }); 
}