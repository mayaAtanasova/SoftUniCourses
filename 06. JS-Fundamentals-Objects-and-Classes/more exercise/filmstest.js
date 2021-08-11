const films = [{ name: 'film 1', year: '1992' }, { name: 'film 2', year: '1992' }, { name: 'film 3', year: '1995' }, { name: 'film 4', year: '1995' }, { name: 'film 5', year: '1995' }, { name: 'film 6', year: '1998' }, { name: 'film 7', year: '1998' }]
let filmsSorted = []
let grades = {}

films.forEach(film => {
    if (!grades[film.year]) {grades[film.year] = []}
    grades[film.year].push(film.name)
})

filmsSorted = Object.entries(grades)
console.log(filmsSorted);