function containsDuplicates(a) {
  let set1 = new Set([...a]);
  if (a.length > set1.size){
    return true
  } else {
    return false
  }
}

//https://app.codesignal.com/interview-practice/task/CfknJzPmdbstXhsoJ
