function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('textarea');
   input = JSON.parse(input.value);

   function onClick() {
      let restaurants = {};
      input.forEach(line => {
         let [restaurant, data] = line.split(' - ');
         if (!restaurants.hasOwnProperty(restaurant)) {
            restaurants[restaurant] = {}
         }
         let workers = data.split(', ').map(x => x.split(' ').map(y => isNaN(y) ? y : +y));
         restaurants[restaurant]['workers'] = workers;
         let avgSalary = workers.map(x => x[1]).reduce((a, b, i, arr) => a + b / arr.length, 0);
         restaurants[restaurant]['avgSalary'] = avgSalary;
      })
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