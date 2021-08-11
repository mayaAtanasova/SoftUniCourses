function condenseArrayToNumber(nums) {
 
    while (nums.length > 1) { 
 
        let condensedArray = [];
        for (let i = 0; i < nums.length - 1; i++) {
            condensedArray[i] = nums[i] + nums[i+1];
        }
        nums = condensedArray;
    }
 
 
    console.log(nums[0]);
}

condenseArrayToNumber([1,2,3,4,5])