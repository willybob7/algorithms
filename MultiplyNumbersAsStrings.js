function multiply(a, b) {
  if (a == 0 || b == 0) {
    return "0";
  }
  if (a[0] == "0") {
    a = a.split("");
    while (a[0] == "0") {
      a.splice(0, 1);
    }
    ;a = a.join("");
  }
  ;if (b[0] == "0") {
    b = b.split("");
    while (b[0] == "0") {
      b.splice(0, 1);
    }
    b = b.join("")
  }
  var answer = "";
  var arr = [];
  var tens = 0;
  var length1 = a.length - 1;
  var length2 = b.length - 1;
  var place = ""

  for (var i = length1; i >= 0; i--) {

    for (var j = length2; j >= 0; j--) {

      var num1 = parseInt(a[i]);
      var addend = parseInt(a[i]);
      var num2 = b[j];
      for (var h = 1; h < num2; h++) {
        num1 += addend;
      }
      if (num2 === "0") {
        num1 = 0;
      }
      if (tens > 0) {
        num1 += tens;
        tens = 0;
      }
      if (num1 > 9) {
        num1 = num1.toString();
        tens = parseInt(num1[0]);
        answer += num1[1];

      } else {
        answer += num1;
      }

    }

    if (tens > 0) {
      answer += tens;
      tens = 0;
    }

    answer = answer.split("").reverse().join("");
    answer += place;
    place += "0";
    arr.push(answer);
    answer = "";
  }

  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i].split("");
    while (arr[i].length < arr[i + 1].length) {
      arr[i].unshift("0");
    }
    arr[i] = arr[i].join("");
    for (j = arr[i + 1].length - 1; j >= 0; j--) {
      var c = parseInt(arr[i][j]);
      var d = parseInt(arr[i + 1][j])
      var sum = c + d;
      if (tens > 0) {
        sum += tens;
        tens = 0;
      }
      if (sum > 9) {
        sum = sum.toString();
        tens = parseInt(sum[0]);
        answer += sum[1];
      } else {
        answer += sum;
      }

    }
    if (tens > 0) {
      answer += tens;
      tens = 0;
    }
    answer = answer.split("").reverse().join("");
    arr[i + 1] = answer;
    answer = "";
  }

  return arr[arr.length - 1];

}

multiply("0000001", "3")
//problem description: https://www.codewars.com/kata/multiplying-numbers-as-strings/javascript
