function palindrome(myString) {
    var input = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var reversed = input.split("").reverse().join("");
    if (input === reversed) {
      document.write("The string is a palindrome.");
    } else {
      document.write("The string is not a palindrome.");
    }

}
palindrome("");

