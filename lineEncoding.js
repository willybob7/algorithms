function lineEncoding(s) {
    let arr = s.split("");
    let i = 0;
    let count = 1;
    let place = "";
    let answer = [];
    while (i < arr.length) {
        place = arr[i];
        if (place == arr[i + 1]) {
            count++;
        } else {
            if (count == 1) {
                answer.push(arr[i])
            } else {
                answer.push(count);
                answer.push(place);
                count = 1;
            }
        }
        i++
    }

    return answer.join("")
}
lineEncoding("bbjaadlkjdl")