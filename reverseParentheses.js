function reverseParentheses(s) {

    const regex = /\([^\(\[\]\{\}\)]+\)/
    var string = s.match(regex)
    var index = s.search(regex)
    var answer = s;
    while (index > -1) {
       string = string[0].slice(1,-1)
       var arr = string.split("");
       arr = arr.reverse();
       string = arr.join("");
       answer = answer.replace(regex, string);
       index = answer.search(regex);
       if (index > -1){
           string = answer.match(regex);
       }
    }

    return answer;
}
reverseParentheses("a(bcdefghijkl(mno)p)q")
//problem description: https://app.codesignal.com/arcade/intro/level-3/3o6QFqgYSontKsyk4
