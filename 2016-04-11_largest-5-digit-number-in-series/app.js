/**
 * Largest 5 digit number in a series:
 * http://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript
 * 
 * In the following 6 digit number:
 * 
 * 283910
 * 
 * 91 is the greatest sequence of 2 digits.
 * 
 * Complete the solution so that it returns the largest five digit number found within the number given..
 * The number will be passed in as a string of only digits. It should return a five digit integer.
 * The number passed may be as large as 1000 digits.
 */

/* My Solution */

// this isn't ideal but for the sake of finishing puzzle
// assume this was optimized
String.prototype.repeat = function(count) {
    if (count < 1) return '';
    var result = '', pattern = this.valueOf();
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
};

// for sake of completing puzzle
function matchOverlap(input, re) {
    var r = [], m;
    // prevent infinite loops
    if (!re.global) re = new RegExp(
        re.source, (re+'').split('/').pop() + 'g'
    );
    while (m = re.exec(input)) {
        re.lastIndex -= m[0].length - 1;
        r.push(m[0]);
    }
    return r;
}

function solution(digits){
  // type and input checking
  if (typeof digits !== 'string')
    return 'input is not a string';
  // if input has non-integer characters
  if (digits.match(/[^[0-9]]*/g) !== null)
    return 'input needs to be string integers only';    
  // input is less than 5 chars
  if (digits.length < 5)
    return null;
  
  // look for largest 5 digit number
  var matches = [];
  var output = null;
  var re;
  
  // search for Nxxxx and find largest
  for (var i = 9; i > -1; i--) {
      re = new RegExp(i + '[0-9]{4}', 'g');
      matches = matchOverlap(digits, re);
      
      // of the matches, compare which one is largest
      if (matches && matches.length > 0) {
          var largest = -1;
          largest = matches.reduce(function(previousVal, curVal) {
              largest = parseInt(curVal);
              return largest > previousVal ? largest : previousVal;
          }, largest);
          
          if (largest > -1) {
              output = largest;
              break;
          }
      }
  }
  
  if (output !== null) {
    output = output.toString();
    output = '0'.repeat(5 - output.length) + output;
  }
  return output;
}

// TEST CASES
// type check / input check
    // is string input?
    // is string < 5 digits
    // does string have non-digit chars
// return string
    // if output is 0, return 00000
// test 8xxxx, 7xxxx, 5xxxx, 3xxxx
// test if input is 01xxx
    // should return 01xxx
    

/*
Best Solution
http://www.codewars.com/kata/51675d17e0c1bed195000001/solutions/javascript
*/

function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}