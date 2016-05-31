

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function sumOfNaturalNumbers(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfNaturalNumbers(n - 1);
    }
}

/* Write a function for mutliply(a, b), where a and b are both positive
integers, but you can only use the + or − operators. */
function multiply(a, b) {
    
    // terminating condition
    if (b === 1) {
        return a;
    }
    // loop
    else {
        return a + multiply(a, b - 1);
    }
}


/* Write a recursive function to reverse a string. Write a recursive
function to reverse the words in a string, i.e., ”cat is running”
becomes ”running is cat”.*/
function reverseString(str) {
    // terminating condition
    if (str.indexOf(' ') === -1) {
        return str;
    }
    // loop
    else {
        return reverseString(str.substring(str.indexOf(' ') + 1, str.length)) + ' ' + str.substring(0, str.indexOf(' '));
    }
}

// console.log(reverseString('cat is running'));


/* Find Greatest Common Divisor (GCD) of 2 numbers using recursion */
function gcd(a, b) {
    return _tryDivisor(a, b, a <= b ? a : b);
}

function _tryDivisor(m, n, g) {
    if (m % g === 0 && n % g === 0) {
        return g;
    }
    else {
        return _tryDivisor(m, n, g - 1);
    }
}

// console.log(gcd(128, 256));


/* A word is considered elfish if it contains the
letters: e, l, and f in it, in any order. For example, we would say
that the following words are elfish: whiteleaf, tasteful, unfriendly,
and waffles, because they each contain those letters */

/* Write a predicate function called elfish? that, given a word,
tells us if that word is elfish or not. */

function isElfish(str) {
    var result = false;
    var elfLetters = {
        'e': false,
        'l': false,
        'f': false
    };
    
    function _tryElfish(str) {
        
        // when the last letter is searched
        if (str.length === 0) {
            return;
        }
        
        // process
        _setElfLetter(str[0]);
        
        // when all 3 letters are found
        if (_checkLetters()) {
            result = true;
            return;
        }
        // loop
        else {
            return _tryElfish(str.substring(1, str.length));
        }
    }
    
    function _checkLetters() {
        var checkResult = true;
        var letters = Object.keys(elfLetters);
        
        for (var i = 0; i < letters.length; i++) {
            if (!elfLetters[letters[i]]) {
                checkResult = false;
                break;
            }
        }
        
        return checkResult;
    }
    
    function _setElfLetter(letter) {
        if (letter === 'e' || letter === 'l' || letter === 'f') {
            elfLetters[letter] = true;
        }
    }
    
    _tryElfish(str);
    
    console.log(elfLetters);
    
    return result;
}

console.log(isElfish('fel'));