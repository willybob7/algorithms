function electionsWinners(votes, k) {
    let possibilites = 0;
    let i = 0;
    let length = votes.length;
    let max = 0;
    let maxDup = 0;
    while (i < length) {
        if (votes[i] == max) {
            maxDup++;
        }
        if (votes[i] > max) {
            max = votes[i]
        }
        i++;
    }
    if (k == 0 && maxDup > 0) {
        return 0;
    } else if (k == 0 && maxDup == 0) {
        return 1;
    }
    i = 0;
    while (i < length) {
        if (votes[i] + k > max) {
            possibilites++;
        }
        i++;
    }

    return possibilites;
}
electionsWinners([5, 1, 3, 4, 1], 0)
