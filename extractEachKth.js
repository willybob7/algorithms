function extractEachKth(inputArray, k) {
    var answer = [];
for (var i = 0, j = 1; i < inputArray.length; i++ , j++){
    if (j != k){
        answer.push(inputArray[i]);
    } else {
      j = 0;
    }
}
    return answer;
}
extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
// problem description: https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R/solutions/rH4LAv3JiCQ8z9PNc
