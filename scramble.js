function scramble(str1, str2) {
  var answer = true;
  for (var i = 0; i < str2.length; i++){
    var thing1 = str1.split(str2[i]);
    var thing2 = str2.split(str2[i]);
    if (thing1.length < thing2.length){
      answer = false;
      break;
    }
  }
  return answer;
}
scramble('sca','javascripts')
