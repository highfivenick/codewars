var findDuplicates = function(nums) {
    let dups = []
    let sorted = nums.sort((a,b) => a-b)
    for (let i = 0; i<sorted.length; i++){
        if(nums[i] === nums[i+1]){
            dups.push(nums[i])
        }
    }
    return dups
};
