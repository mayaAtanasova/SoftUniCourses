function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick() {
      let restaurants = {};
      let input = JSON.parse(document.querySelector('textarea').value);
      input.forEach(line => {
         let [restaurant, data] = line.split(' - ');
         if (!(restaurant in restaurants)) {
            restaurants[restaurant] = {};
            restaurants[restaurant].workers = [];
         }
         let workers = data.split(', ').map(x => x.split(' ').map(y => isNaN(y) ? y : +y));
         restaurants[restaurant].workers = [...restaurants[restaurant].workers, ...workers];
         let avgSalary = restaurants[restaurant].workers.reduce((a, c, i, arr) => a + c[1] / arr.length, 0);
         restaurants[restaurant]['avgSalary'] = avgSalary;
      });
      let sorted = Object.entries(restaurants).sort((a, b) => b[1]['avgSalary'] - a[1]['avgSalary']);
      let bestRestaurant = sorted[0];
      let bestRestaurantName = bestRestaurant[0];
      let bestAvgSalary = bestRestaurant[1]['avgSalary'].toFixed(2);
      let bestSalary = bestRestaurant[1]['workers'].sort((a, b) => b[1] - a[1])[0][1].toFixed(2);
      let firstSentence = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary} Best Salary: ${bestSalary}`;
      let secondSentence = bestRestaurant[1]['workers'].sort((a,b) => b[1] - a[1]).map(x => `Name: ${x[0]} With Salary: ${x[1]}`).join(' ');
      document.querySelector('#bestRestaurant > p').textContent = firstSentence;
      document.querySelector('#workers > p').textContent = secondSentence;      
   }
}