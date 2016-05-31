/**
 * Project Euler Question 2 - Even Fibonacci Numbers
 * https://projecteuler.net/problem=2
 */

/* Generators Basics */
function* idMaker() {
    var index = 0;
    while(index < 3)
        yield index++;
}

var gen = idMaker();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

/* Generators Fibonacci */

function* fibonacci(iterations) {
    var n = 0,
        FIB_ROOT_VAL = 1;
    
    function _fib(n) {
        // terminating conditions
        if (n <= 2) {
            return FIB_ROOT_VAL;
        } else {
            return _fib(n - 1) + _fib(n - 2);
        }
    }
    
    while (n < iterations) {
        yield _fib(++n);
    }
}

var iterations = 100000;
var f = fibonacci(iterations);
var curVal = 0;
var fArray = [];
var threshold = 4000000;

for (var i = 0; i < iterations; i++) {
    curVal = f.next().value;
    if (curVal >= threshold)
        break;
    else
        fArray.push(curVal);
}

console.log(fArray, fArray.length);

// find sum of even valued terms

var sumOfEvenTerms = fArray.reduce(function(previousVal, currentVal) {
    if (currentVal % 2 === 0)
        previousVal += currentVal;
    return previousVal;
}, 0);

console.log(sumOfEvenTerms);