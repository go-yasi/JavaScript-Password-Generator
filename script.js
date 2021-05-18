// Selecting button with the id "generate" and assigning it to variable "generateBtn"
var generateBtn = document.querySelector("#generate");

// ARRAYS FOR CHARACTER GROUPS
// Array of lowercase characters
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
// Array of uppercase characters
var uppChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Array of numeric characters
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of special characters
var speChar = ["!", "@", "#", "$", "%", "&", "*", "?"];

// Checking if new arrays are working by printing them in the console!
console.log(lowChar);
console.log(uppChar);
console.log(numChar);
console.log(speChar);

//FUNCTIONS TO ASK FOR USER'S CHOICES & VARIABLES TO STORE THEIR ANSWERS
// Prompt to ask user the desired length of their password and store their response (length) in passLength variable
var passLength = window.prompt("How many characters long would you like your password to be?");
// Message that confirms their chosen password length
window.alert("Okay, your password will be " + passLength + " characters long.");

// function that prompts the user for their password selection
  // variable to store the length of the array
  // prompt to ask for length of password, and assign that value to the length variable above 

  // if user input is not a number, reject
  // if user number input is not a number < 8, reject
  // if user input is > 128, reject

  // variable to store the user's choice about lowercase characters = answer to their confirm
    // "do you want lowercase characters"
    // (variable = confirm.value)

  // variable to store the user's choice about uppercase characters = answer to their confirm
    // "do you want uppercase characters"

  // variable to store the user's choice about numeric characters = answer to their confirm
    // "do you want numeric characters"

  // variable to store the user's choice about special characters = answer to their confirm
    // "do you want special characters"

  // if all character confirms are false, tell user they must pick at least one group and return

  // functio nto randomly generate password (array)
    // var options = Math.floor(Math.random() * array.length)
    // return options

  // function to generate password 
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
  

// Write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener for the generate button used to generate the password
generateBtn.addEventListener("click", writePassword);
