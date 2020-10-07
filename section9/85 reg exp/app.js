let re;
// Literal characters
re = /hello/;
re = /hello/i; // i = Case insensitive

// Metacharacters symbols
re = /^h/i; // ^h =  Must start with h
re = /d$/i; // d$ =  Must end with d
re = /^hello$/i; // ^hd$ = Must start with h and end with d
re = /^h.llo$/i; // . = Matches any ONE character
re = /h*llo/i; // * = Matches any character - or more times
re = /gre?a?y/i; // ? = Optional character e? = e is optional
re = /gre?a?y\?/i; // escape a character by using a backslash like this \?

// Brackets [] - Character sets
re = /gr[ae]y/i; // Character must be an "e" or an "a"
re = /[GF]ray/; // Character must be an "G" or an "F"
re = /[^GF]ray/; // Match anything inside the brackets except an "G" or an "F"
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any  letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Matches to Hello - Must occurr exactly (thischaracter){m} ammount of times
re = /Hel{2,4}o/i; // Matches to Hello - Must occurr exactly (thischaracter){between m and m} ammount of times
re = /Hel{2,}o/i; // Matches to Hello - Must occurr exactly (thischaracter){atleast m} ammount of times

// Parentheses () - Grouping
re = /[0-9]x{3}/; // Match if number 0 to 9 and 3 times an x --- 4xxx
re = /([0-9]x){3}/; // Match if number 0 to 9 and x is found 3 times -- 3x3x3xsdfsf

// String to match
const str = '3x3x3x';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
