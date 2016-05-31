/**
 * Project Euler Question 3 - Largest Prime Factor
 * https://projecteuler.net/problem=3
 */
        
function largestPrimeFactor(n) {
    var squareFactor = Math.ceil(Math.sqrt(n)); // largest factor cannot exceed this value
    var primes = [2];                           // all prime numbers encountered so far
    var results = [];                           // results
    var curPrime = primes[0];                   // current prime factor
    var curN = n;                               // current large number
    var _isPrime = true;                        // used for finding next prime number
    
    /* Recursive helper method */
    function _factorize() {
        // if curPrime is divisible by curN
        if (curN % curPrime === 0) {
            curN /= curPrime;
            addFactor(curPrime);
            // if curN is the highest prime, terminate
            if (curN === 1) {
                return results;
            }
            // else, keep going
            else {
                _factorize();
            }
        }
        // if curPrime is not divisible by curN
        else {
            var isNoMoreNextPrime = false;
            // look for next prime factor
            while (curPrime < squareFactor) {
                _isPrime = true;
                primes.push(primes[primes.length - 1] + 1);
                for (var i = 0; i < primes.length - 2; i++) {
                    // if the new number is divisible by an existing prime number
                    if (primes[primes.length - 1] % primes[i] === 0) {
                        _isPrime = false;
                        break;
                    }
                }
                // curPrime is the next prime, break out of while loop
                if (_isPrime) {
                    curPrime = primes[primes.length - 1];
                    break;
                } else {
                    primes.pop();
                }
            }
            
            
            
        }
    }
    
    /* Add prime to results */
    function _addFactor(primeNum) {
        if (results.length > 0 && results[length - 1] < primeNum) {
            results.push(primeNum);
        }
    }
    
    _factorize();

}
    

var n = 165;

var squareFactor = Math.ceil(Math.sqrt(n)); // largest factor cannot exceed this value
var primes = [2];                           // all prime numbers encountered so far
var results = [];                           // results
var curPrime = primes[0];                   // current prime factor
var curN = n;                               // current large number

// function _findNextPrime() {
//     var _isPrime = true;    // used for finding next prime number
//     var _limitReached = false;
    
//     while (curPrime < squareFactor) {
//         _isPrime = true;
//         curPrime++;
        
//         for (var i = 0; i < primes.length - 1; i++) {
//             // curPrime is divisble by existing prime
//             if (curPrime % primes[i] === 0) {
//                 _isPrime = false;
//                 break;            
//             }
//         }
        
//         // terminating condition
//         if (_isPrime) {
//             primes.push(curPrime);
//             break;
//         }
//     }
    
//     if (!_isPrime && curPrime + 1 === squareFactor) {
//         return -1;
//     } else {
//         return curPrime;
//     }
// }

// console.log(_findNextPrime());
// console.log(_findNextPrime());
// console.log(_findNextPrime());
// console.log(_findNextPrime());
// console.log(_findNextPrime());

// console.log('a: ', squareFactor, curPrime);
// console.log(primes);