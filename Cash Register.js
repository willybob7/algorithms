function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var change2 = cash - price;
  var values = [[0.01],[0.05],[0.1],[0.25],[1],[5],[10],[20],[100]];
  var totalChange = 0;
  var currentCoin = [];
  var answer = [];
  var indexes = [];


  for (var i = 0; i < cid.length; i++){
    totalChange += cid[i][1];
  }

  totalChange = Math.round(totalChange * 100) / 100;

  if (totalChange > change) {
    values.forEach(function (value, index){
      if(change >= value){
      currentCoin.unshift(cid[index][1]);
      indexes.unshift(index);
     }
    });

   for ( var j = 0; j < indexes.length; j++){
     if (change === 0){
       break;
     }
     var a = indexes[j];
     values[a].push(currentCoin[j]);
     var coinValue = [];
     var totalValue = 0;
     while (change >= values[a][0]){
       if (values[a][1] === 0){
         break;
       }
       values[a][1] -= values[a][0];
       change -= values[a][0];
       totalValue += values[a][0];
       change = Math.round(change * 100) / 100;
     }
     coinValue.push(cid[a][0]);
     coinValue.push(totalValue);
     answer.push(coinValue);
     answer = answer.filter(c => c[1] > 0);

   }
     var availableChange = 0;
    answer.forEach(function (d,e){
      availableChange += d[1];
    });
     if (change2 > availableChange){
       answer = "Insufficient Funds";
     }
  } else if (totalChange == change){
    answer = "Closed";
  } else {
    answer = "Insufficient Funds";
  }




  return answer;
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
