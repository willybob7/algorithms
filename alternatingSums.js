function alternatingSums(a) {
    var group1 = [];
    var group2 = [];
    var group1Weight;
    var group2Weight;

    for (var i = 0; i < a.length; i++) {
        var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };

        if (isEven(i) === true) {
            group1.push(a[i]);
        } else {
            group2.push(a[i]);
        }
    }
    group1Weight = group1.reduce(function(a, b) {
        return a + b;
    });
    if (group2.length === 0) {
        group2Weight = 0;
    } else {
        group2Weight = group2.reduce(function(c, d) {
            return c + d;
        });
    }

    var answer = [group1Weight, group2Weight];

    return answer;
}

//problem description: https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9
