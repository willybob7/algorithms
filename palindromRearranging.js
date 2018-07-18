function palindromeRearranging(inputString) {
    //find out if the length is even or odd
    //if the length is even then there should be and even number of each
    //letter in the string
    //if the length is odd, there should be an even number of each
    //letter in the string except for one.

    var count = 0;
    var arr = inputString.split("");
    var char = [];
    var answer = true;

    function countInArray(array, item) {
        var count = 0;
        for (var h = 0; h < array.length; h++) {
            if (array[h] === item) {
                count++;
            }
        }
        return count;
    }

    if (arr.length % 2 === 0) {
        for (var i = 0; i < arr.length; i++) {
            if (char.indexOf(arr[i]) == -1) {
                char.push(arr[i]);
            }
        }
        for (var j = 0; j < char.length; j++) {
            if (countInArray(arr, char[j]) % 2 != 0) {
                answer = false;
                break;
            }
        }

    } else {
        for (var i = 0; i < arr.length; i++) {
            if (char.indexOf(arr[i]) == -1) {
                char.push(arr[i]);
            }
        }
        for (var j = 0; j < char.length; j++) {
            if (countInArray(arr, char[j]) % 2 != 0) {
                count++;
            }
            if (count > 1) {
                answer = false;
                break;
            }
        }
    }
    return answer;
}

palindromeRearranging("abbcabb")
//problem description: https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
