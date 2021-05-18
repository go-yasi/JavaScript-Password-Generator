// Selecting button with the id "generate" and assigning it to variable "generateBtn"
var generateBtn = document.querySelector("#generate");

// Array of lowercase characters
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
// Array of uppercase characters
var uppChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Array of numeric characters
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of special characters
var speChar = ["!", "@", "#", "$", "%", "&", "*", "?"];

// Checking if new arrays are working by printing them in the console
console.log(lowChar);
console.log(uppChar);
console.log(numChar);
console.log(speChar);



// Write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener for the generate button used to generate the password
generateBtn.addEventListener("click", writePassword);
