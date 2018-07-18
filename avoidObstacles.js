function avoidObstacles(inputArray) {
    var greatest = Math.max(...inputArray);
    var i = 0;
    var addend = 1;
    while (i < greatest){
       i += addend;
       if (inputArray.indexOf(i) != -1){
           addend++;
           i = 0;
       }
    }
    return addend;
}
avoidObstacles([1, 4, 10, 6, 2])
//problem description: https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5
