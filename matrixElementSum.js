function matrixElementsSum(matrix) {
    var marker = [];
    var prices = [];

    for (var i = 0; i < matrix[0].length; i++) {
        marker.push(1);
    }

    matrix.forEach(function(arr) {
        marker.forEach(function(num, index) {
            if (arr[index] === 0) {
                marker[index] = 0;
            }
            if (marker[index] == 1) {
                prices.push(arr[index]);
            } else {
                prices.push(0);
            }
        });
    });

    return prices.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })

}
matrixElementsSum([[0]])
//problem description: https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr
