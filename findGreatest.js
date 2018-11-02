function deleteDigit(n) {
  let string = n.toString();
  let i = 0;
  let length = string.length;
  let greatest = "0";
  while (i < length ){
    let test = string.slice(0,i) + string.slice(i+1);
    if (test > greatest){
      greatest = test;
    }
    i++;
  }
  return parseInt(greatest,10);
}
deleteDigit(152)
