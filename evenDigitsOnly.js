function evenDigitsOnly(n) {

    var nums = n.toString();
    var arr = nums.split("");
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            return false;
        }
    }
    return true;
}
//problem description: https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW
