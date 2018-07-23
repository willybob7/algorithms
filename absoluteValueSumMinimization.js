
function absoluteValuesSumMinimization(a) {
    var arr = [];
    var sum = 0;
    for (var i = 0, n = a.length; i < n; i++){
        for (var j = 0; j < n; j++){

             sum += Math.abs(a[j]-a[i])
        }
        arr.push(sum);
        sum = 0;
    }
    return a[arr.indexOf(Math.min(...arr))];
}
absoluteValuesSumMinimization([2, 4, 7])
// problem description: https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq
