function openOrSenior(data){
  var info = data;
  var answer = [];
  data.forEach(function(value){
     if (value[0] >= 55 && value[1] > 7){
     answer.push("Senior");
     } else {
       answer.push("Open");
     }
  });
  return answer;
}
//problem description: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
