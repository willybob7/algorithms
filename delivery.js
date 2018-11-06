function delivery(order, shoppers) {
  let answer = [];
  let i = 0;
  while (i < shoppers.length) {
    let time = (shoppers[i][0] + order[0]) / shoppers[i][1] + shoppers[i][2]
    if (time >= order[1] && time <= order[1] + order[2]) {
      answer.push(true);
    } else {
      answer.push(false);
    }
   i++;
  }
   return answer;
}
delivery([200, 20, 15], [[300,40,5],
 [600,40,10]])
