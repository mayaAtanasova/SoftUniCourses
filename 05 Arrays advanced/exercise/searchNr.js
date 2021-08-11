function search(nums, commands){
    let [nrsToTake, nrsToDel, searchNr] = commands;
    nums = nums.slice(0, nrsToTake);
    nums = nums.slice(nrsToDel);
    let result = nums.filter(el => el == searchNr);

    console.log(`Number ${searchNr} occurs ${result.length} times.`);
}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )