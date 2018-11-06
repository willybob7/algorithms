function spiralNumbers(n) {
  let bigArr = [];
  let i = 0;
  let j = 0;
  while (i < n) {
    let smallArr = [];
    while (j < n) {
      smallArr.push(0);
      j++;
    }
    bigArr.push(smallArr);
    smallArr = [];
    i++;
    j = 0;
  }
  let count = 1;
  let xAxis = 0;
  let yAxis = 0;
  function right(x, y) {
    while (x < n && bigArr[y][x] == 0) {
      bigArr[y][x] = count;
      count++;
      x++;
    }
    if (count <= n * n) {
      y++;
      x--;
      down(x, y);
    }
  }
  function down(x, y) {
    while (y < n && bigArr[y][x] == 0) {
      bigArr[y][x] = count;
      count++;
      y++;
    }
    if (count <= n * n) {
      x--;
      y--;
      left(x, y);
    }
  }
  function left(x, y) {
    while (x >= 0 && bigArr[y][x] == 0) {
      bigArr[y][x] = count;
      count++;
      x--;
    }
    if (count <= n * n) {
      x++;
      y--;
      up(x, y)
    }
  }
  function up(x, y) {
    while (bigArr[y][x] == 0) {
      bigArr[y][x] = count;
      count++;
      y--;
    }
    if (count <= n * n) {
      y++;
      x++;
      right(x, y);
    }
  }
  right(xAxis, yAxis);
  return bigArr;

}
spiralNumbers(10000)
