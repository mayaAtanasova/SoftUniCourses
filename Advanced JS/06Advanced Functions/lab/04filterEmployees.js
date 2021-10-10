function filterEmps(data, criteria) {
    let result;
    const [criterion, value] = criteria.split('-');
    const input = JSON.parse(data);
    if (criteria == 'all') {
        result = input;
    } else {
        result = input.filter(el => el[criterion] == value);
    }
    result.forEach(el => {
      console.log(`${result.indexOf(el)}. ${el.first_name} ${el.last_name} - ${el.email}`);
    });
}

filterEmps(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
'last_name-Johnson'
);