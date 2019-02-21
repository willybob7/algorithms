function sumInRange(nums, queries) {
    let bigSum = 0,
        i = 0,
        j = 0,
        mod = 1e9 + 7,
        n = queries.length,
        l = nums.length,
        P = new Array(l+1),
        sum = nums[0]

    P[0] = 0;
    P[1] = sum;

    while (++i < l) {
      sum += nums[i];
      P[i+1] = sum;
    }

    while (j < n){
        bigSum += P[queries[j][1]+1] - P[queries[j][0]]
        j++
    }



    return ((bigSum % mod) + mod) % mod;
}
//https://app.codesignal.com/interview-practice/task/4MoqQLaw22nrzXbgs/solutions
