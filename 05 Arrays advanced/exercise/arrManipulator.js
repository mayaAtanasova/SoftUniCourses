function manipulate(nums, instructions) {
    for (let i = 0; i < instructions.length; i++) {
        let commandLine = instructions[i].split(' ');
        let command = commandLine.shift();
        switch (command) {
            case 'add':
                let index = Number(commandLine[0]);
                let el = Number(commandLine[1]);
                nums.splice(index, 0, el);
                break;
            case 'addMany':
                let id = commandLine.shift();
                nums.splice(id, 0, ...commandLine);
                nums = nums.map(Number);
                break;
            case 'contains':
                let nrToMatch = Number(commandLine[0])
                console.log(nums.indexOf(nrToMatch));
                break;
            case 'remove':
                let i = Number(commandLine[0]);
                nums.splice(i, 1);
                break;
            case 'shift':
                nums = rotate(nums, commandLine[0]);
                break;
            case 'sumPairs':
                nums = sumPair(nums);
                break;
            case 'print':
                console.log(nums)
                break;
        }
    }
    function rotate(array, n) {
        for (let i = 1; i <= n; i++) {
            let temp = array.shift();
            array.push(temp);
        }
        return array;
    }
    function sumPair(array) {
        let result = [];
        for (let i = 0; i < array.length; i += 2) {
            let temp = 0;
            if (i + 1 != array.length) {
                temp = array[i] + array[i + 1];
            } else {
                temp = array[i];
            }
            result.push(temp);
        }
        return result;
    }
}

manipulate([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']    
)