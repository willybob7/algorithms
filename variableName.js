function variableName(name) {
  var regex = /[\w\d]+/g
  var regex2 = /\d/
  var arr = name.split("");
  var match = name.match(regex)
  var match2 = arr[0].match(regex2);

  if (match2) {
    return false;
  } else if (match[0] == name) {
    return true;

  } else {
    return false;
  }

}
variableName("var_1__Int")
//problem description: https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno
