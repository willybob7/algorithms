function digitsProduct(product) {
    if (product === 0) {
        return 10;
    } else if (product == 1) {
        return 1;
    }
    var countdown = 9;
    var string = [];
    var newProduct = product;
    while (newProduct > 1) {
        while (countdown > 1) {
            if (newProduct % countdown == 0) {
                string.unshift(countdown.toString());
                newProduct /= countdown;
                countdown = 9;
            } else {
                countdown--;
            }

        }
        if (countdown == 1 && newProduct > 1) {
                return -1;
            }
    }
    return parseInt(string.join(""), 10);
}
digitsProduct(398)
