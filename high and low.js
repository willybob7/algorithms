function highAndLow(numbers){
  let arr = numbers.split(" ");
  let high = Math.max(...arr);
  let low = Math.min(...arr);
  return `${high} ${low}`;
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
