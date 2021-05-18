// Selecting button with the id "generate" and assigning it to variable "generateBtn"
var generateBtn = document.querySelector("#generate");

// ARRAYS FOR CHARACTER GROUPS
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uppChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var speChar = ["!", "@", "#", "$", "%", "&", "*", "?"];
var finalArray = [];

// Checking if new arrays are working by printing them in the console
console.log(lowChar);
console.log(uppChar);
console.log(numChar);
console.log(speChar);

function generatePassword(){


// PASSWORD LENGTH
// prompt user for desired password length 
var userLength = window.prompt("How many characters long would you like your password to be?");
console.log(userLength);
// create conditionals for parameters
  // if user input is not a number, reject
  // if user input is < 8, reject
  if (userLength < 8) {
    window.alert("Your password is too short!");
  }
  // if user input is > 128, reject
  if (userLength > 128) {
    window.alert("Your password is too long!");
  }
// // store user response (length) in variable
// var passLength = userLength.value();


// LOWERCASE CHARACTERS
var userLower = window.confirm("Do you want lowercase characters in your password?");
console.log(userLower);
  // variable to store the user's choice about lowercase characters = answer to their confirm
  // var userLower = confirm.value();
  // "do you want lowercase characters"

// UPPERCASE CHARACTERS
  // variable to store the user's choice about uppercase characters = answer to their confirm
    // "do you want uppercase characters"

// NUMERIC CHARACTERS
  // variable to store the user's choice about numeric characters = answer to their confirm
    // "do you want numeric characters"

// SPECIAL CHARACTERS
  // variable to store the user's choice about special characters = answer to their confirm
    // "do you want special characters"

// if all character confirms are false, tell user they must pick at least one group and return
if (userLower === true) {
  finalArray = finalArray.concat(lowChar);
  console.log(finalArray);
}

// function to randomly generate password (array)
  // var options = Math.floor(Math.random() * array.length)
  // return options

  var password = "";

  // for loop that loops through the amount of times
  for (var i = 0; i < userLength; i++) {
    password = password + finalArray[Math.floor(Math.random() * finalArray.length)];
  }
  console.log(password);

// function to generate password 
return password;
  // variable = passsword options function
  // variable that equals an empty array, array = []
  // check if options exist, if not, return
                        // you can use thruthie and falsie values (example below)

                          // if (options) {

                          // }
                          // if (!options) {

                          // }
  // check if options has lowercase characters
  // check if options has uppercase characters
  // check if options has numeric characters
  // check if options has special characters

// use the concat method 
}

// Write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener for the generate button used to generate the password
generateBtn.addEventListener("click", writePassword);
