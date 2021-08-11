function condense(array) {
    let newArray = [];

    if (array.length == 1) {
        newArray = array;
    } else {

        while (array.length > 1) {
            newArray = [];
            for (let i = 0; i < array.length - 1; i++) {
                newArray.push(array[i] + array[i + 1])
            }

            array = newArray;
        }
    }
    console.log(newArray.toString());
}
condense([5])