function sumStrings(a, b) {

    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var e;
    if (a.length === 0){
        num1 = 0;
    }
    if (b.length === 0){
        num2 = 0;
    }

    function toFix(x) {
        e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += (new Array(e + 1)).join('0');
            e += 5;
            var smallNum1 = parseInt(a.slice(-e));
            var smallNum2 = parseInt(b.slice(-e));
            var smallSum = smallNum1 + smallNum2;
            x = x.split("");
            x.splice(16, e, (smallSum.toString()))
            x = x.join("");

        }

        return x;
    }
    var bigNum = toFix(num1 + num2);

    return bigNum.toString();

}
sumStrings('712569312664357328695151392', '8100824045303269669937')
//problem description: https://www.codewars.com/kata/5324945e2ece5e1f32000370
