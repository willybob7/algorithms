function whoIsNext(names, r) {
  var num = r
  var base = names.length;
  if (r <= base) {
    return names[r - 1];
  }
  var trackerArr = []
  var string = [];
  for (var i = 0; i < names.length; i++) {
    string.push(0);
    trackerArr.push(1);
  }
  var j = 0;
  var sum = 0;
  i = 0;
  while (sum <= r) {
    var current = trackerArr[j];
    trackerArr.push(current + current);
    string[i]++;
    j++;
    i++;
    if (i == base) {
      i = 0;
    }
    sum = trackerArr.reduce((a,b)=>a + b);
  }
  var a = Math.max(...string);
  var b = string.lastIndexOf(a);
  return names[b];

}

var names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
var r = 7230702951;
whoIsNext(names, r);
