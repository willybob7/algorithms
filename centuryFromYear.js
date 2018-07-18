function centuryFromYear(year) {
  var num = year.toString();
  var century;
  var arr = [];
  var length = num.length;


  if (length == 4){
      var grouping = [];
    for(var i = 0; i < length; i ++){
       grouping.push(num[i]);
       if (grouping.length == 2){
           var value = grouping[0] + grouping[1];
           arr.push(value);
           grouping = [];
       }
    }
    centuryCheck(arr);
  }
  if (length == 3){
    arr.push(num[0]);
    arr.push(num[1] + num[2]);
    centuryCheck(arr);
  }
  if (length <= 2){
    century = 1;
  }
  function centuryCheck(array){
    if (array[1] > 0 ){
        century = parseInt(array[0]) + 1;
    } else {
      century = parseInt(array[0]);
    }
  }

  return century;
}

centuryFromYear(1908)
//problem description: https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN
