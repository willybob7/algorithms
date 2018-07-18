function getPINs(observed) {
  if (Number.isInteger(parseInt(observed))) {
    var nums = [[1, 2, 4], [1, 2, 3, 5], [2, 3, 6], [1, 4, 5, 7], [2, 4, 5, 6, 8], [3, 5, 6, 9], [4, 7, 8], [5, 7, 8, 9, 0], [6, 8, 9], [8, 0]];
    var input = observed.split("");
    var tracker = [];
    var ones = [];
    var answer = [];
    var flip = 0;
    input.forEach(a=>{
      tracker.push(nums[(parseInt(a) - 1)].length);
      ones.push(1);
    }
    );
    var end = parseInt(tracker.join(""));
    var start = parseInt(ones.join(""));
    while (start <= end) {
      var arr = [];
      input.forEach((a,i)=>{
        arr.push(nums[(parseInt(a) - 1)][(ones[i] - 1)])
      }
      );
      if (arr.indexOf(undefined) == -1) {
        for (var j = 0, m = arr.length; j < m; j++) {
          arr[j] = arr[j].toString();
        }
        arr = arr.join("");
        answer.push(arr);
      }
      arr = [];
      start++;
      ones = start.toString().split("")
      for (var i = 1, n = ones.length; i < n; i++) {
        if (flip == 1) {
          ones[i] = 1;
        } else if (ones[i] - 1 >= tracker[i]) {
          ones[i - 1]++;
          ones[i] = 1;
          flip++;
        }
      }
      flip = 0;
      start = parseInt(ones.join(""));
    }

    return answer;
  }
}

getPINs("3556")
//problem description: https://www.codewars.com/kata/5263c6999e0f40dee200059d/solutions/javascript
