function zigzag(a) {

  var counter = 0;
  var arr = [];

  a.forEach((value,index)=>{
    if (index % 2 === 0) {
      if (value > a[index + 1]) {
        counter++;
      } else {
        arr.push(counter);
        counter = 0;
      }
    } else {
      if (value < a[index + 1]){
        counter++;
      } else {
        arr.push(counter);
        counter = 0;
      }
    }
  });
  a.forEach((value,index)=>{
    if (index % 2 !== 0) {
      if (value > a[index + 1]) {
        counter++;
      } else {
        arr.push(counter);
        counter = 0;
      }
    } else {
      if (value < a[index + 1]){
        counter++;
      } else {
        arr.push(counter);
        counter = 0;
      }
    }

  });
  return Math.max(...arr) + 1;

}
zigzag([2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4])
//problem description: https://app.codesignal.com/skill-test/2B8XeEofPLRAFoESn
