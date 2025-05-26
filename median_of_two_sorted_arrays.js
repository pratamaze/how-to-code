/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    // sorting array
    let Array3 = nums1.concat(nums2)
    Array3.sort(function(a,b){
        return a-b
    })
    console.log(Array3)
    length = Array3.length

    // find the median of the array's element
    if(length % 2 == 0){
        return (Array3[(length/2)] + Array3[length/2 -1]) /2
    }else{
        return Array3[(length/2) - .5]
    }

};

let nums1 = [1,3]
let nums2 = [2]
findMedianSortedArrays(nums1, nums2)
