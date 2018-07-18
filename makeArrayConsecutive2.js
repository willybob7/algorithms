function makeArrayConsecutive2(statues) {
   var top = Math.max(...statues);
   var bottom = Math.min(...statues);
   var difference = top - bottom;
   var answer =  (difference - statues.length) + 1;
   return answer;
}
//problem description: https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC
