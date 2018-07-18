function boxBlur(image) {
  var length = image.length - 2;
  var height = image[0].length - 2;
  var blurPixels = length * height;
  var answer = [];
  var averages = [];
  var i = 0;
  var j = 3;
  var k = 0;
  while (i < length) {
    while (k < height) {
      var arr = [];
      arr.push(image[i].slice(k, j));
      arr.push(image[(i + 1)].slice(k, j));
      arr.push(image[(i + 2)].slice(k, j));
      arr = arr.reduce((a,b)=>a.concat(b), []);
      var sum = arr.reduce((a,b)=>a + b);
      sum = Math.floor(sum / 9);
      averages.push(sum)
      j++;
      k++;
    }
    j = 3
    k = 0
    answer.push(averages);
    averages = [];
    i++;
  }
  return answer;
}

boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]])
//problem description: https://app.codesignal.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP
