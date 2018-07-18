function isIPv4Address(inputString) {
    var regex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
    var arr = inputString.split(".")
    var answer = true;
    var thing = inputString.match(regex);
    if (thing == null || thing[0] != inputString) {
        answer = false;
    }
    if (answer == true) {
        arr.forEach(value=>{
            var num = parseInt(value);
            if (num < 0 || num > 255) {
                answer = false;
            }
        });
    }

    return answer;
}
isIPv4Address("1a.254.255.0")
//problem description: https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso
