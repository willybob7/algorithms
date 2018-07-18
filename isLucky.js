function isLucky(n) {
    var str = n.toString();
    var arr1 = [];
    var arr2 = [];

    for (var i = 0; i < (str.length / 2); i++) {
        arr1.push(parseInt(str[i]));
    }
    for (var j = (str.length / 2); j < str.length; j++) {
        arr2.push(parseInt(str[j]));
    }
    var sum1 = arr1.reduce(function(a, b) {
        return a + b;
    });
    var sum2 = arr2.reduce(function(c, d) {
        return c + d;
    })
    if (sum1 == sum2) {
        return true;
    } else {
        return false;
    }
}

isLucky(1230)
//problem description: https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ
