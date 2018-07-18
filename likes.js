function likes(names) {
  var saying = " likes this";
  var saying2 = " like this";
  var answer;
  if (names.length === 0){
      answer = "no one" + saying;
  }
  if (names.length == 1){
      answer = names[0] + saying;
  }
  if (names.length == 2) {
    answer = names[0] + " and " + names[1] + saying2;
  }
  if (names.length == 3) {
      answer = names[0] + ", " + names[1] + " and " + names[2] + saying2;
  }
  if (names.length >= 4){
      answer = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others" + saying2;
  }
return answer;
}
//problem description: https://www.codewars.com/kata/5266876b8f4bf2da9b000362
