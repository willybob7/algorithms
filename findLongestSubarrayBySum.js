function findLongestSubarrayBySum(s, arr) {
    if (arr.length == 1 && arr[0] == s){
        return [1,1]
    }
  let subArr = [];
  let i = 0;
  let j = 1;
    let sum = arr[i];
    while (j < arr.length) {
      sum += arr[j];
      while (sum > s) {
        sum -= arr[i];
        i++;
      }
      if (sum == s) {
      subArr.push([i + 1, j+1])
      }
      j++;
    }
  if (subArr.length > 1) {
    let longest = subArr.map(function(a) {
      return a[1] - a[0];
    })
    var len = longest.length;
    var max = 0;
    while (len--) {
      if (longest[len] > max) {
        max = longest[len];
      }
    }
    return subArr[longest.indexOf(max)]

  } else if (subArr.length == 1) {
    return subArr[0];
  } else {
    return [-1]
  }
}
findLongestSubarrayBySum(468, [135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48, 127, 0, 172, 0, 139, 0, 0, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134])
