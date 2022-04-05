function inverseWhile() {
    var fiveNumbers = "";
    var i = 5;
    while (i > 0) {
        fiveNumbers = fiveNumbers + i + ",";
        i--;
    }
    fiveNumbers = fiveNumbers + 0;
    return fiveNumbers;
}
console.log(inverseWhile());
module.exports = inverseWhile;