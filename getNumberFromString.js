function getNumberFromString(s) {
  var arr = s.split("");
  var regex = /\d/;
  var answer = "";
  arr.forEach(function(value){
     if (regex.test(value))
     answer += value;
  });

  return parseInt(answer);
}
//problem description: https://www.codewars.com/kata/57a37f3cbb99449513000cd8
