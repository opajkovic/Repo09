function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber-minNumber+1)) + minNumber;
}
console.log(randomRangeNumber(1, 20));
console.log(randomRangeNumber(20, 100));
randomRangeNumber(1, 20);
randomRangeNumber(20, 100);
module.exports = randomRangeNumber;
