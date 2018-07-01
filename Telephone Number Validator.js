function telephoneCheck(str) {
  var regex =/^1?\s?([(]\d{3}[)]|\d{3})[-\s]?\s?\d{3}[\s-]?\d{4}$/g;
  return regex.test(str);
}



telephoneCheck("2 (757) 622-7382");
