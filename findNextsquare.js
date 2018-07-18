function findNextSquare(sq) {
  var num = sq;
  var answer;
  if (Number.isInteger(Math.sqrt(sq)) === false){
      answer = -1;
    }else{
      while (answer == undefined){
        num++;
        if(Number.isInteger(Math.sqrt(num))===true ){
          answer = num;
          }
      }
   }



  return answer;
}
//problem description: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
