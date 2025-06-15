/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
   arr = height
   const n = arr.length;

   let left = Array(n);
   let right = Array(n);
   let res = 0;

   // Fill left array
   left[0] = arr[0];
   for (let i = 1; i < n; i++) {
      left[i] = Math.max(left[i - 1], arr[i]);
   }

   // Fill right array
   right[n - 1] = arr[n - 1];
   for (let i = n - 2; i >= 0; i--) {
      right[i] = Math.max(right[i + 1], arr[i]);
   }

   // Calculate the accumulated water element by element
   for (let i = 1; i < n - 1; i++) {
      let minOf2 = Math.min(left[i], right[i]);
      res += minOf2 - arr[i];
   }

   return res;
};