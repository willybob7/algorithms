function knapsackLight(value1, weight1, value2, weight2, maxW) {
     var answer;
     if (weight1 + weight2 > maxW){
       if (weight1 > maxW && weight2 > maxW){
         answer = 0;
       } else if (weight1 <= maxW && weight2 <= maxW){
         answer = [value1, value2].sort(function(a,b){
           return a - b;
         })[1]
       } else if (weight1 > maxW ){
         answer = value2;
       } else {
         answer = value1;
       }
     } else {
       answer = value1 + value2;
     }
    return answer;

}
knapsackLight(2, 5, 3, 4, 5);
