function alphabeticShift(inputString) {
  var x = 0;
  var y = 0;
  var originalCharCodes = [];
  var newLetters = [];
  while (x < inputString.length) {
    var code = inputString.charCodeAt(x) + 1;
    if (code > 122) {
      code = 97;
    }
    originalCharCodes.push(code);
    x++;
  }
  while (y < inputString.length) {
    var newLet = String.fromCharCode(originalCharCodes[y]);
    newLetters.push(newLet);
    y++;
  }

  return newLetters.join("");

}
alphabeticShift("crazy")
//problem description: https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui
