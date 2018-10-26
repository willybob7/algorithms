function tree(a){
  var depth = 0;
  var maxDepth = 0;
  var arr = [];
  var answer = [];
  var answerIndexes = [];
  var finalAnswer = [];
  var thing = a.split("");
  thing.forEach(function(a,i){
    if (a == "("){
      depth++;
      arr.push(depth);
      if (depth > maxDepth){
          maxDepth = depth;
      }
    } else if(a== ")"){
      depth--;
      arr.push(depth);
    }else {
      arr.push(0);
    }
  });

  arr.forEach(function(a,i){
    var check = thing[i+1]
     if (a == maxDepth && check == ")" && thing[i-2] != ")"){
         answer.push(thing[i-2]);
         answerIndexes.push(i-2);
     }
  });
  answer.forEach(function(a,i){
    var l = answerIndexes[i]-1;
    var string = a;
    while(thing[l] != "("){
      string+= thing[l];
      l--;
    }
    if(string.length > 1){
      string = string.split("").reverse().join("");
    }
    finalAnswer.push(parseInt(string, 10));
  })

  return finalAnswer;
}

tree("(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))")

// [5, 11, 4]
