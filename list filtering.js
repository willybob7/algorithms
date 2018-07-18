function filter_list(l) {
  var answer = [];
  l.forEach(function(value){
     if(typeof value == "number"){
       answer.push(value);
     }
  });
  return answer
};
//problem description: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
