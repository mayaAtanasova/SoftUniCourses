function sortNumbers(input){
    let array = input.split(' ').map(Number);
    let avg = findAverage(array);
    let result = [];

    for (element of array){
        if (element > avg){
            result.push(element);
        }
    }

    result.sort((a,b) => b-a);
    result = result.slice(0,5);

    function findAverage(array){
        let sum = 0;
        for (el of array){
            sum += el;
        }
        return sum/array.length;
    }
    if(result.length == 0){
        console.log('No');
    }else{
        console.log(result.join(' '));
    }
}
sortNumbers('-1 -2 -3 -4 -5 -6')