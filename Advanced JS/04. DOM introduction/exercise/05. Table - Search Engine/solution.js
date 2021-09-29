function solve() {
   let rows = document.querySelectorAll('tbody tr');
   document.querySelector('#searchBtn').addEventListener('click', () => {
      let searchString = document.getElementById('searchField').value;
      for(let i = 0; i < rows.length; i++){
         if(rows[i].textContent.includes(searchString)){
            rows[i].className = 'select';
         }else{
            rows[i].removeAttribute('class');
         }
      }
   });
}