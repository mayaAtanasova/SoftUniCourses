function smallest(nums){
    let result = nums
    .sort((a,b) => a-b)
    .slice(0, 2)
    .join(' ');
    console.log(result);
}
smallest([30, 15, 50, 5])