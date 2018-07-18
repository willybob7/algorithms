function commonCharacterCount(s1, s2) {
    var arg = s1 + s2;
    var letters = [];
    var letterCount = [];
    var answer = 0;
    for (var i = 0; i < arg.length; i++) {
        if (s1.indexOf(arg[i]) != -1 && s2.indexOf(arg[i]) != -1) {
            if (letters.indexOf(arg[i]) == -1) {
                letters.push(arg[i]);
            }

        }
    }
    letters.forEach(value=>{
        var regex = new RegExp(value,"g");
        var count1 = s1.match(regex).length;
        var count2 = s2.match(regex).length;
        var arr = [count1, count2];
        var numMatching = Math.min(...arr);
        answer += numMatching;
    }
    );

    return answer;

}
commonCharacterCount("aabcc", "adcaa")
//problem description: https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32
