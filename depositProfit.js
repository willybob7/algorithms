function depositProfit(deposit, rate, threshold) {
    var count = 0;
    while (deposit < threshold){
      deposit = deposit + (deposit  * (rate/100));
      count++;

    }
    return count;
}
depositProfit(100,1,101)
//problem description: https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb/solutions
