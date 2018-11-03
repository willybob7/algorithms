function differentSquares(matrix) {
    var x = matrix[0].length - 1;
    var y = matrix.length - 1;
    var i = 0;
    var j = 0;
    var answer = [];
    while (i < y) {
        while (j < x) {

            var square = [matrix[i][j].toString(),
                          matrix[i][j + 1].toString(),
                          matrix[i + 1][j].toString(),
                          matrix[i + 1][j + 1].toString()].join("");
            console.log(square);
            if (answer.indexOf(square) == -1) {
                answer.push(square);
            }

            j++;
        }
        i++;
        j = 0;
    }
    return answer.length
}
differentSquares([[1,2,1],
 [2,2,2],
 [2,2,2],
 [1,2,3],
 [2,2,1]])
