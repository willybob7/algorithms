function buildPalindrome(st) {
  var palindrome = st;
  var string = st;
  var reverse = string.split("").reverse().join("");
  var index = 0;
  if (string == reverse){
    return st;
  }
  while (string != reverse) {
    var arr = string.split("");
    arr.splice(0, 1);
    string = arr.join("");
    reverse = string.split("").reverse().join("");
    index++;
  }
  var letters = st.split("").splice(0,index).reverse();
  letters.forEach(function(a) {
    palindrome += a;
  })
  return palindrome;

}
buildPalindrome("abcdefgfdsaf")
