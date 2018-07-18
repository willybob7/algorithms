function duplicateCount(text){
  var arr = text.toLowerCase().split("");
  var arr2 = [];

  arr.forEach(function (value, index){
      var start = index + 1;
      if (arr.indexOf(value, start) != -1 ){
          if(arr2.indexOf(value)==-1){
             arr2.push(value);
          }
      }
  });

return arr2.length;
}
//problem description: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
