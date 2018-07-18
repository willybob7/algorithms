
function addBorder(picture) {
   var arr = [...picture];
   var asterisk = (picture[0].length + 2);
   var asteriskLine = "";


   for ( var j = 0; j < asterisk; j++){
      asteriskLine += "*";
   }

   for ( var i = 0; i < picture.length; i++){
      var letters = arr[i].split("");
      letters.unshift("*");
      letters.push("*");
      var line = letters.join("");
      arr.splice(i, 1, line);
   }
   arr.unshift(asteriskLine);
   arr.push(asteriskLine);
   return arr;

}
//problem description: https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN
