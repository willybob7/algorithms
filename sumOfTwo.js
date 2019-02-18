function sumOfTwo(a, b, v) {
   let i = 0
   let lookup;
   if (a.length <= b){
     lookup = new Set([...b])
     let n = a.length
     while (i < n){
        if (lookup.has(v-a[i])){
           return true
        }
        i++
     }
   } else {
     lookup = new Set([...a])
     let n = b.length
     while (i < n){
      if (lookup.has(v-b[i])){
           return true
        }
        i++
     }
   }
  return false



}
//https://app.codesignal.com/interview-practice/task/Hm98RnqK9Be575yoj/description
