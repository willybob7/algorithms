function addTwoDigits(n) {
var string = n.toString();
 var arr = string.split("");
 var numArr = [];
 arr.forEach(function (value){
     numArr.push(parseInt(value));
 });

    return numArr[0] + numArr[1];

}
//problem description: https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66
