function sortBooks(input) {
    let shelves = {};
    input.forEach(line => {
        if (line.includes(' -> ')) {
            let [id, genre] = line.split(' -> ');
            if (!shelves.hasOwnProperty(id)) {
                shelves[id] = {
                    'genre': genre,
                    'books': []
                };
            };
        } else {
            let [book, genre] = line.split(', ');
            let arr = Object.entries(shelves);
            let index = arr.findIndex(x => x[1]['genre'] == genre);
            if (index != -1) {
                let shelfId = arr[index][0];
                shelves[shelfId]['books'].push(book);
            }
        }
    });
    let sortedShelves = Object.entries(shelves)
        .sort((a, b) => b[1]['books'].length - a[1]['books'].length)
        .forEach(sh => {
            console.log(`${sh[0]} ${sh[1]['genre']}: ${sh[1]['books'].length}`);
            sh[1]['books'].sort((a,b) => a.localeCompare(b)).forEach(el =>{
                console.log(`--> ${el}`);
            });
        });
}
sortBooks([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance', 'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
])