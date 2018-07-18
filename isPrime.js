function isPrime(num) {
  var limit = Math.sqrt(num);
  var answer = true;
  if (num == 2) {
    return answer;
  } else if (num % 2 === 0 || num < 2) {
    answer = false;
    return answer;
  } else {
    for (var i = 3; i <= limit; i += 2) {
      if (num % i === 0) {
        answer = false;
        return answer;
      }
    }
  }
  return answer;

}
isPrime(9)
//problem description: https://www.codewars.com/kata/5262119038c0985a5b00029f
