function sortByHeight(a) {
    var arr = [...a];
    var treePos = [];

    a.forEach(function(value, index) {
        if (value == -1) {
            treePos.push(index);
        }
    });
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == -1) {
            arr.splice(i, 1);
            i--;
        }
    }

    arr.sort(function(a, b) {
        return a - b;
    });

    treePos.forEach(function(value) {
        arr.splice(value, 0, -1)
    });

    return arr;
}
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
//problem description: https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM
