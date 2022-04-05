function checkSing(num) {
    return (num > 0) ? "positive"
    : (num < 0) ? "negative" 
    : "zero";
}
console.log(checkSing(10));
console.log(checkSing(-12));
console.log(checkSing(0));
checkSing(10);
checkSing(-12);
checkSing(0);
module.exports = checkSing;