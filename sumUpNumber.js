function sumUpNumbers(inputString) {
  var arr = inputString.split(/\D/).filter(a=>a.length > 0)
  .map(a => parseInt(a))
  console.log(arr)
  if (arr.length) {
    if (arr.length == 1){
    return parseInt(arr[0],10)
  }
    return arr.reduce((a,b)=>a + b)
  } else {
    return 0;
  }
}

sumUpNumbers("123450")
