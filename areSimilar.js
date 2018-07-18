function areSimilar(a, b) {
    var answer = true;
    var indexDiff = 0;
    var arr = [];

    for (var k = 0; k < a.length; k++) {
        if (arr.indexOf(a[k]) == -1) {
            arr.push(a[k]);
        }
        if (arr.indexOf(b[k]) == -1) {
            arr.push(b[k]);
        }

    }

    function countInArray(array, item) {
        var count = 0;
        for (var h = 0; h < array.length; h++) {
            if (array[h] === item) {
                count++;
            }
        }
        return count;
    }

    for (var i = 0; i < arr.length; i++) {
        var countA = countInArray(b, arr[i]);
        var countB = countInArray(a, arr[i]);
        if (countA != countB) {
            answer = false;
            break;
        }

    }

    if (answer == true) {
        for (var j = 0; j < a.length; j++) {
            if (a[j] != b[j]) {
                indexDiff++;
                if (indexDiff > 2) {
                    answer = false;
                    break;
                }
            }
        }

    }

    return answer;
}

//problem description: https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP
