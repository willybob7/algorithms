function duplicateEncode(word) {
  var answer = "";
  var junk = word.toLowerCase().split("");
  junk.forEach((a,i)=>{
    var letters = word.toLowerCase().split("");
    var thing = letters.splice(i, 1);
    if (letters.indexOf(a) == -1) {
      answer += "(";
    } else {
      answer += ")"
    }
  }
  )
  return answer;
}
duplicateEncode("Success")
// problem description: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
