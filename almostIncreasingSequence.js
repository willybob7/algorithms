function almostIncreasingSequence(sequence) {
    var arr = [...sequence];
    var answer;
    var i = 0;
    var flip = true;
    while (i <= (sequence.length - 1)) {
        if (flip == false) {
            answer = false;
            break;
        }
        var check = i + 1;
        if (arr[i] >= arr[check]) {
            if (check == (arr.length - 1)) {
                var remove = arr.splice(check, 1);
            } else if (arr[(i + 2)] > arr[i]) {
                var remove = arr.splice(check, 1);
            } else {
                var remove = arr.splice(i, 1);
            }
            ;
            if (arr.length == 1) {
                answer = true;
                i = (sequence.length - 2);
                break;
            }
            var j = (i - 1);
            while (j <= (arr.length - 1)) {
                var check2 = j + 1;
                if (arr[j] >= arr[check2]) {
                    flip = false;
                    break;
                } else if (j == arr.length - 2) {
                    i = (sequence.length - 1);
                    break;

                }

                j++;
            }

        }
        if (i == (sequence.length - 1) && flip == true) {
            answer = true;
            break;
        }
        i++;
    }

    return answer;
}
almostIncreasingSequence([1, 2, 3, 4, 3, 6])
//problem description: https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG
