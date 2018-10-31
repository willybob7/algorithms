function isMAC48Address(inputString) {
  if (inputString.length) {
    const regex = /[0-9A-F]{2}/;
    var splitArr = inputString.split("-");
    var i = 0;
    if (splitArr.length != 6) {
      return false;
    }
    while (i < splitArr.length) {
      var check = splitArr[i].match(regex);
      if (check == null){
        return false;
      }
      if (splitArr[i].match(regex)[0] !== splitArr[i]) {
        return false;
      }
      i++;
    }
    return true;
  } else {
    return false;
  }

}
isMAC48Address("Z1-1B-63-84-45-E6")
