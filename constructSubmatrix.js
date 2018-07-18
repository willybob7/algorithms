function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  if (rowsToDelete.length > 0) {
    var arr = matrix.splice(rowsToDelete, 1);
  }

  var arr2 = [];
  var answer = [];
  if (columnsToDelete.length > 0) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (columnsToDelete.indexOf(j) == -1) {
          arr2.push(matrix[i][j]);
        }
      }
      answer.push(arr2);
    arr2 = [];
    }
    return answer
  } else {
    return matrix
  }

};
constructSubmatrix([[1, 0, 0, 2], [0, 5, 0, 1], [0, 0, 3, 5]], [], [0])
//problem description: https://app.codesignal.com/skill-test/spBaKtwKWJpubMWTE
