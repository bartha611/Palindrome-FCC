function palindrome(str) {
  // Good luck!
  var new_str = ""; //create a new string to check palindrome
  let alphaNumberRegex = /[a-zA-Z0-9]/;
  for(var i = 0; i < str.length; i++) {
    if(alphaNumberRegex.test(str[i])) {
      new_str += str[i];
    }
  }
  var k = new_str.length - 1;
  for(var j = 0; j < new_str.length; j++) {
    if(new_str[j].toUpperCase() != new_str[k].toUpperCase()) {
      return false;
    }
    k -= 1;
  }
  return true;
}
