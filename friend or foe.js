function friend(friends){
  var good = [];
  var list = friends;
  list.forEach(function(value){
    if (value.length == 4){
      good.push(value);
    }

  });
  return good;

}
//problem description: https://www.codewars.com/kata/55b42574ff091733d900002f
