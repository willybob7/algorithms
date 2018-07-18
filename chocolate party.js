function shareChocolate(n) {
  if(Number.isInteger(n)=== true && n > 0){
    var chocolate = [1,2,3,4,5,6];
    var kids = [0,0,0,0,0,0];
    var barsToShare = [];

    for (var i = 0; i < n; i++){
      kids.forEach(function (value, index){
        var kidsPlus1 = value + 1;
        var divide = chocolate[index] / kidsPlus1;
        barsToShare.push(divide);
      });
     var mostChocolate = Math.max(...barsToShare);
     var seat = barsToShare.indexOf(mostChocolate);
     var increment = kids[seat] +1
     kids.splice(seat, 1, increment);
     barsToShare=[];
    }

    return kids;
  } else {
    return null;
  }
}
//problem description: https://www.codewars.com/kata/5ace43e046b4cbb3e2000170
