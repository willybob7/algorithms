function fileNaming(names) {
  let words = [];
  let times = [];
  let i = 0;
  while (i < names.length) {
    if (words.includes(names[i])) {
      let currentWord = names[i]
      let multiples = times[words.indexOf(names[i])]
      names[i] = names[i] + "(" + multiples + ")";
      while (words.includes(names[i])) {
        multiples++;
        names[i] = currentWord + "(" + multiples + ")";
      }
      times[words.indexOf(currentWord)]++;
      words.push(names[i])
      times.push(1);
    } else {
      words.push(names[i])
      times.push(1);
    }
    i++;
  }
  return names
}
fileNaming(["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"])
