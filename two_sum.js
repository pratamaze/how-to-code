/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    target = target
    array_result = []
    for( i=0 ; i < nums.length; i++){
        for (j=0; j<nums.length; j++){

            if ((target == nums[i] + nums[j]) && (i != j)){
                array_result.push(i,j)
                return array_result
            }
        }
    }
    
};