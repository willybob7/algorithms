function arrayMaximalAdjacentDifference(inputArray) {

    var max = 0;
    function difference(a, b) {
     return Math.abs(a - b);
    }
    for (var i = 0; i < inputArray.length - 1; i++){
        var diff = difference(inputArray[i], inputArray[(i+1)]);
        if (diff > max){
            max = diff;
        }
    }
    return max;
}
arrayMaximalAdjacentDifference([2, 4, 1, 0])
//problem description: https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE
