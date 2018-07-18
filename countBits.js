var countBits = function(n) {
  return n.toString(2).split("").filter((a)=>a == 1).length;
};
//problem description https://www.codewars.com/kata/526571aae218b8ee490006f4
