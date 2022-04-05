function inverseWhile() {
    var fiveNumbers = "";
    var i = 5;
    while (i >= 0) {
        if(fiveNumbers == 0) {
            fiveNumbers = fiveNumbers + i;
        } else {
            fiveNumbers = fiveNumbers + ","+ i;
        }
        i--;
     }
    return fiveNumbers;
}
console.log(inverseWhile());
module.exports = inverseWhile;