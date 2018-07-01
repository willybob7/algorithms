function convertToRoman(num) {
 var romanNum = [
   ["I","II","III","IV","V","VI","VII","VIII","IX"],
   ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
  ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM",],
  ["M","MM","MMM"]
 ] ;

 var arr = num.toString().split("").reverse();
 var rNums = [];
 romanNum.forEach(function (a, i){
   romanNum[i].forEach(function (b, j){
     if((j + 1) == arr[i]){
      rNums.unshift(b);
      }
   });

 });
 var result = rNums.join('');
 return result;
}

convertToRoman(3643);
