function create(words) {
   const container = document.getElementById('content');
   words.forEach(w => {
      const newDiv = document.createElement('div');
      const newP = document.createElement('p');
      newP.textContent = w;
      newP.style.display = 'none';
      newDiv.appendChild(newP);
      newDiv.addEventListener('click', (ev) =>{
         ev.target.children[0].style.display = 'block';
      });
      container.appendChild(newDiv);
   });
}