function process(nums) {
    let result = nums
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse();
    console.log(result.join(' '));
}
process([3, 0, 10, 4, 7, 3])