function minesweeper(matrix) {

  var i = 0;
  var j = 0;
  var count = 0;
  var row = [];
  var answer = [];

  while (i < matrix.length) {
    while (j < matrix[0].length) {

      var right = false || matrix[i][(j + 1)];
      var left = false || matrix[i][(j - 1)];
      if (i > 0) {
        var up = false || matrix[(i - 1)][j];
        var upRight = false || matrix[(i - 1)][(j + 1)];
        var upLeft = false || matrix[(i - 1)][(j - 1)];
      }
      if (i < (matrix.length - 1)){
        var down = matrix[(i + 1)][j];
        var downRight = matrix[(i + 1)][(j + 1)];
        var downLeft = matrix[(i + 1)][(j - 1)];
      } else {
        down = false;
        downRight = false;
        downLeft = false;
      }

      var check = [right, left, up, down, upRight, upLeft, downRight, downLeft];

      check.forEach((value)=>{
        if (value === true){
           count++;
        }
      });
      row.push(count);
      count = 0;
      j++;
    }
    answer.push(row);
    row = [];
    j = 0;
    i++;
  }

  return answer;

}
minesweeper([[true,false,false,true],
             [false,false,true,false],
             [true,true,false,true]])
//problem description: https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM
