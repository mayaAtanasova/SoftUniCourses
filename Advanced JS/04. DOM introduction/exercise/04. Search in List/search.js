function search() {
   let searchString = document.getElementById('searchText').value;
   let items = document.getElementById('towns').children;
   let matches = 0;
   for (let i = 0; i < items.length; i++) {
      if (items[i].textContent.includes(searchString)) {
         items[i].style.textDecoration = 'underline';
         items[i].style.fontWeight = 'bold';
         matches++;
      }else{
         items[i].style.textDecoration = 'none';
         items[i].style.fontWeight = 'normal';
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}
