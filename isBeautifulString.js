function isBeautifulString(inputString) {
    var arr = inputString.split("").sort();
    var charCode = 97;
    var groupArr = [];
    var string = "";
    var answer = true;
    var i = 0;
    arr.forEach(function (a, i) {
        if (a == arr[i + 1]) {
            string += a;
        } else {
            string += a;
            groupArr.push(string);
            string = "";
        }
    });
    while (i < groupArr.length) {
        if (groupArr[i][0].charCodeAt() != charCode) {
            return false;
        }
        i++;
        charCode++;
    }
    i = 0;
    while (i < groupArr.length - 1) {
        if (groupArr[i].length < groupArr[i + 1].length) {
            return false;
        }
        i++;
    }
    return answer;
}
isBeautifulString("bbbaacdafe")