var lastDigit = function(str1, str2) {
  if (str2 === "0") {
    return 1;
  }
  var l = str1[str1.length - 1];
  var arr = [];
  var arr2 = [];
  for (var i = 1; i < 11; i++) {
    arr.push(Math.pow(l, i))
  }
  for (i = 0; i < arr.length; i++) {
    var digits = arr[i].toString().split("");
    if (arr2.indexOf(digits[digits.length - 1]) == -1) {
      arr2.push(digits[digits.length - 1]);
    }
  }

  function modulo(divident, divisor) {
    var partLength = 10;
    while (divident.length > partLength) {
      var part = divident.substring(0, partLength);
      divident = (part % divisor) + divident.substring(partLength);
    }
    return divident % divisor;
  }

  var remainder = modulo(str2, arr2.length);
  if (remainder === 0) {
    remainder = arr2.length;
  }
  return parseInt(arr2[remainder - 1], 10);
}

lastDigit("3715290469715693021198967285016729344580685479654510946723", "0")
