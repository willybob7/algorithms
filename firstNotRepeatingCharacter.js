function firstNotRepeatingCharacter(s) {

  var arr = s.split("");
  var answer = "_";
  var dups = [];
  for (var i = 0; i < arr.length; i++) {
    if (dups.indexOf(arr[i]) == -1) {
      var letter = arr[i];
      arr.splice(i, 1);
      if (arr.indexOf(letter) == -1) {
        answer = letter;
        break;
      } else {
        arr.splice(i, 0, letter);
        dups.push(letter);
      }
    }

  }

  return answer;
}
firstNotRepeatingCharacter("abaacbad")
//problem description: https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC
