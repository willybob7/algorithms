function validSolution(board) {
  var check = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var answer = true;
  var n = board.length;
  var allnums = [];
  var tempStorage = [];

  board.forEach((a,index)=>{
    for (var i = 0; i < n; i++) {
      tempStorage.push(board[i][index]);
    }
    allnums.push(tempStorage);
    tempStorage = [];
  });

  for (i = 0; i < n; i += 3) {
    for (var j = 0; j < n; j+=3) {
      tempStorage.push(board[i].slice(j,j+3))
      tempStorage.push(board[i+1].slice(j,j+3))
      tempStorage.push(board[i+2].slice(j,j+3))
      allnums.push(tempStorage.reduce((acc, val) => acc.concat(val), []));
      tempStorage = [];
    }

  }
    board.forEach(a=>{
        allnums.push(a);
    })

    for (i = 0, b = allnums.length; i < b; i++){
      allnums[i].sort((a,b)=>a-b);
      for (j = 0; j < n; j++){
        if (allnums[i][j] != check[j]){
         answer = false;
         break;
        }
      }
      if (answer == false){
        break;
      }
    }

  return answer;
}
//problem description: https://www.codewars.com/kata/sudoku-solution-validator/train/javascript
