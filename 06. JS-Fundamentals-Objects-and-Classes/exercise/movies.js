function movieList(input) {
    let movieList = [];
    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i];
        if (commandLine.includes("addMovie")) {
            let name = commandLine.split(' ')
            name.shift();
            name = name.join(' ');
            let myMovie = {
                name,
            }
            movieList.push(myMovie);
        }
        if (commandLine.includes("directedBy")) {
            commandLine.split(' ');
            let index = commandLine.indexOf("directedBy");
            let nameToCheck = commandLine.slice(0, index - 1);
            for (let i = 0; i < movieList.length; i++) {
                let myMovie = movieList[i];
                if (nameToCheck === myMovie.name) {
                    myMovie["director"] = commandLine.slice(index + 11, commandLine.length).toString();
                }
            }
        }
        if (commandLine.includes("onDate")) {
            commandLine.split(' ');
            let index = commandLine.indexOf("onDate");
            let nameToCheck = commandLine.slice(0, index - 1);
            for (let i = 0; i < movieList.length; i++) {
                let myMovie = movieList[i];
                if (nameToCheck === myMovie.name) {
                    myMovie["date"] = commandLine.slice(index + 7, commandLine.length).toString();
                }
            }
        }
    }
    for (let i = 0; i < movieList.length; i++){
        let currentMovie = movieList[i];
        if(currentMovie.director && currentMovie.date){
            console.log(JSON.stringify(movieList[i]));
        }

    }
}

movieList([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])