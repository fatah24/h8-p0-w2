
function xo(str) {
var xStr = 0
var oStr = 0
  for(var i = 0; i < str.length; i++) {
   if('x' === str[i]) {
    xStr += 1
  } else if('o' === str[i]) {
    oStr += 1
  }
  } if(xStr === oStr) {
    return 'true'
  } else if(xStr !== oStr) {
    return 'false'
  }
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
