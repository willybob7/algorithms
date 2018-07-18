function allSquaredPairs(num) {
    var limit = Math.sqrt(num);
    var nums = [];
    var addends = [];
    var answer = [];
    var grouping = [];

    for (var h = 0; h <= limit; h++) {
        nums.push(h * h);
    }

    var i = 0;
    while (i <= nums.length) {
        var remainder = num - nums[i];
        var check = Math.sqrt(remainder);

        if (Number.isInteger(check) == true) {
            if (addends.indexOf(i) == -1) {
                addends.push(check);
                addends.push(i);
            }

        }

        i++;
    }
    addends.forEach(function(value) {
        grouping.push(value);
        if (grouping.length == 2) {
            answer.push(grouping);
            grouping = [];
        }
    });

    return answer;
}
//problem description: https://www.codewars.com/kata/52217066578afbcc260002d0
