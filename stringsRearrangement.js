function stringsRearrangement(inputArray) {
  inputArray = inputArray.sort();
  var answer = false;
  var check = true;
  var differences = [];
  var a = inputArray;
  var n = inputArray.length;
  var p = [];
  var j, i, h, k, l;
  for (i = 0; i < n; i++) {
    p.push(0);
  }
  function swap(array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  }
  ;i = 1;
  while (i < n) {
    var numdiff = [];
    for (h = 1; h < n; h++) {
      if (check == true) {
        var currentLetters = inputArray[h].split("");
        var checkLetters = inputArray[h - 1].split("");
        var diff = 0;
        for (l = 0; l < checkLetters.length; l++) {
          if (currentLetters[l] != checkLetters[l]) {
            diff++;
          }
        }
        numdiff.push(diff);
      } else {
        break;
      }
    }
    var m = numdiff.length;
    for (l = 0; l < m; l++) {
      if (numdiff[l] > 1 || numdiff[l] === 0) {
        check = false;
        break;
      } else if (l == m - 1) {
        answer = true;
      }
    }

    if (answer == true) {
      break;
    }
    if (p[i] < i) {
      j = i % 2 * p[i];
      swap(a, j, i);
      check = true;
      p[i]++;
      i = 1;
    } else {
      p[i] = 0;
      i++;
    }

  }

  return answer;

}
stringsRearrangement(["abc", "abx", "axx", "abc"])
//probelem description: https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9/description
//this one took me a couple days to figure out.
