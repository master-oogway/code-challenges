
/* A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking. */

var N = 100;    // number of floors
var k;          // interval size

// f(k) = N / k + k | k : {0 : 100}

function throws(k) {
    return N / k + k;
}

console.log(throws(3));

// best k is the derivative of N / k (tangent slope of minimum point should be 0)
// k = sqrt(N)

