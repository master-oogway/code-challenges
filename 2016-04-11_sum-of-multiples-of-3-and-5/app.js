/**
Project Euler Question 1 - Multiples of 3 and 5
https://projecteuler.net/problem=1
*/

/*
My Solution
*/

function sumOfMultiple(limit, num1, num2) {
  // typechecking
  var sum = 0;
  var overlap = num1 * num2; // poor man's least common multiple
  // overlap = leastCommonMultiple(num1, num2);
  // check if num1 or 2 is multiple of each other

  var n = 1,
      m = 1,
      l = 1,
      nMultiple = num1 * n,
      mMultiple = num2 * m,
      lMultiple = overlap * l;

  for (var n = n; nMultiple < limit; n++) {
    nMultiple = num1 * n;
    sum += nMultiple;
  }
  for (var m = m; mMultiple < limit; m++) {
    mMultiple = num2 * m;
    sum += mMultiple;
  }
  for (var l = l; lMultiple < limit; l++) {
    mMultiple = overlap * l;
    sum -= lMultiple;
  }

  return sum;
}

setTimeout(function () {
  console.log(sumOfMultiple(1000, 3, 5));
}, 1000);


/*
Best solution found here:
http://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-12.php
*/

function sumOfMultiple_best(limit, num1, num2) {
  var sum = 0;
  for (var x = 0; x < 1000; x++) {
    if (x % num1 === 0 || x % num2 === 0) {
      sum += x;
    }
  }
  return sum;
}

console.log(sumOfMultiple_best(1000, 3, 5));