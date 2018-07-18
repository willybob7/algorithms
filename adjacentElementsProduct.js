function adjacentElementsProduct(inputArray) {
   var sumArr = [];
   for (var i = 0; i < (inputArray.length - 1); i++){
      var mult = inputArray[i] * inputArray[(i + 1)];
      sumArr.push(mult);
   }
   return Math.max(...sumArr)
}
//problem description: https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
