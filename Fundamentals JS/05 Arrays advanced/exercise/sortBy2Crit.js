function sort(array){
    array.sort((a,b) => {
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;
        if(a.length == b.length){
            if (a < b) return -1;
            if (a > b) return 1;
        }
    });
    console.log(array.join('\n'))
}
sort(["Isacc", "Theodor", "Jack", "Harrison", "Harrisop","George"])