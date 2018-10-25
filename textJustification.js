function textJustification(words, l) {
  var arr = [];
  var arr2 = [];
  var answer = [];
  var i = 0;
  while (i < words.length) {
    while (arr.join("").length + (arr.length - 1) < l) {
      if (arr.join("").length + words[i].length + (arr.length - 1) < l) {
        arr.push(words[i]);
      } else {
        break;
      }
      i++;
      if (i >= words.length) {
        break;
      }
    }
    arr2.push(arr);
    arr = [];
    if (i >= words.length) {
      break;
    }
  }
  var space = 1;
  var count = 0;
  arr2.forEach(function(a, i) {
    if (i == arr2.length - 1) {
      while (a.join("").length < l) {
        a.splice(space, 0, " ");
        space += 2;
      }
    } else if (a.length == 1) {
      while (a.join("").length < l) {
        a.splice(space, 0, " ");
      }
    } else {
      while (a.join("").length < l) {
        a.splice(space, 0, " ");
        space += 2 + count;
        if (space >= a.length) {
          count++;
          space = 1 + count;
        }
      }
    }
    space = 1;
    count = 0;
  });
  arr2.forEach(function(a) {
    answer.push(a.join(""));
  });
  return answer;
}
textJustification(["Two", "words."], 11)
