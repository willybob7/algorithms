function allLongestStrings(inputArray) {
    var length = 0;
    var answer = [];
    inputArray.forEach(function(value) {
        if (value.length > length) {
            length = value.length;
        }
    });
    inputArray.forEach(function(value) {
        if (value.length == length) {
            answer.push(value);
        }
    });

    return answer;
}
allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])
//problem description: https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL
