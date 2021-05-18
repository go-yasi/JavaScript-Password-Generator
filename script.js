// Selecting button with the id "generate" and assigning it to variable "generateBtn"
var generateBtn = document.querySelector("#generate");

// Write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener for the generate button used to generate the password
generateBtn.addEventListener("click", writePassword);
