function firstDuplicate(a) {
  var arr = [...a].sort((a,b)=>{
    return a - b
  }
  );
  var smallest = a.length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[(i + 1)]) {
      var first = a.indexOf(arr[i]);
      var second = a.indexOf(arr[i], (first+1))
      if (second < smallest) {
        smallest = second;
      }
    }

  }
  var answer = a[smallest];
  if (answer === undefined) {
    return -1;
  } else {
    return answer;
  }
}

firstDuplicate([2, 1, 3, 5, 3, 2])
//problem description: https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q
