function incrementString(strng) {
  let arr = strng.split("");
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    let n = parseInt(arr[i], 10);
    if (Number.isInteger(n)) {
      num.push(n);
      arr.splice(i, 1);
      i--;
    }
  }
  if (num.length > 0) {
    let sum = num.join("");
    sum++;
    sum = sum.toString();
    sum = sum.split("");
    if (sum.length <= num.length) {
      for (let i = (num.length - sum.length), j = 0; i < num.length; i++,
      j++) {
        num.splice(i, 1, sum[j])
      }
    } else {
      num = sum;
    }
  } else {
    num = "1";
  }
  arr = arr.concat(num);
  return arr.join("");
}

incrementString("foobar99")
