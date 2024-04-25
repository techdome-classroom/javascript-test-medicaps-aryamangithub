function smallestMissingPositiveInteger(nums) {
  // Implement the function smallest_missing_positive_integer
  let i=0
  while(i < nums.length){
    if(arr[i] > 0 && arr[i] <= arr.length && arr[arr[i] - 1] !== arr[i]) {
      [arr[arr[i] - 1], arr[i]], 
    }
  }
}

module.exports = smallestMissingPositiveInteger;
