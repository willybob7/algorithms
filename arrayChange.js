function arrayChange(inputArray) {

    var arr = [...inputArray];
    var answer = 0;
    for (var i = 0; i < (arr.length-1); i++){
        var next = i + 1;
        if (arr[i] >= arr[next]){
            for (var j = arr[next]; j <= arr[i]; j++){
                answer++;
                arr[next]++;
            }
        }
    }
    return answer;

}
arrayChange([1, 1, 1]);
//problem description: https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg
