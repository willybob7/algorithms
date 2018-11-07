function shoppingList(items) {
    let arr = items.match(/\d+(\.\d+)?/g)
console.log(arr)
    if (arr != null) {
        return arr.map(a=>parseFloat(a))
            .reduce(function(a, b) {
            return a + b
        })

    } else {
        return 0;
    }
}
shoppingList("wanna 22.2&15.3olo 0.00 and 12.12kk0.02 ..34")
