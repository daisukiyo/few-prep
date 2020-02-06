function isSorted(nums){
    original = nums.slice()
    sorted = nums.sort(function(a,b){return a-b});
    if(original == sorted){
      return true
    } else {
      return false
    }
  };
  