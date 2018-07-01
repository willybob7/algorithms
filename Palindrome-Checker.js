function palindrome(str) {
  str = str.toLowerCase();
  var arr = str.split("");
  var letters = [];
  var regex = /[a-z0-9]/;

  arr.forEach(function (value){
    if (value.match(regex)){
      letters.push(value);
    }
  });
  var test = letters.join("");
  var reverse = letters.reverse();
  var backwards = reverse.join("");


  if (backwards == test){
   return true;
  } else {
    return false;
  }

}



palindrome("not a palindrome");
