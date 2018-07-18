function shapeArea(n) {
    var area;
  if (n == 1){
    area = 1;
  }
  if ( n == 2){
    area = 5;
  }  else {
    var tri = n - 2;
    var triangleArea = 4 * ((tri * (tri + 1))/2);
    var lineArea = (n - 1) * 4;
    var area = triangleArea + lineArea + 1;
  }
  return area;
}
//problem description: https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
