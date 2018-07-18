function rotateImage(a) {

    var arr = [];
    var answer = [];
    for(var i = 0; i < a.length; i++){
        for (var j = 0; j < a.length; j++){
            arr.push(a[j][i]);
        }
        answer.push(arr.reverse());
        arr = [];
    }
 return answer;
}
//problem description: https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB
