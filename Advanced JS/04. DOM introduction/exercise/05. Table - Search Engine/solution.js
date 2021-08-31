function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody tr');

   function onClick() {
      let searchString = document.getElementById('searchField').value;
      for(let i = 0; i < rows.length; i++){
         if(rows[i].textContent.includes(searchString)){
            rows[i].className = 'select';
         }else{
            rows[i].removeAttribute('class');
         }
      }
   }
}