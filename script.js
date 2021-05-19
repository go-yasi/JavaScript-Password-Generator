// Selecting button with the id "generate" and assigning it to variable "generateBtn"
var generateBtn = document.querySelector("#generate");

// ARRAYS FOR CHARACTER GROUPS
var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uppChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var speChar = ["!", "@", "#", "$", "%", "&", "*", "?"];
var finalArray = [];

    // console log to check
    console.log(lowChar);
    console.log(uppChar);
    console.log(numChar);
    console.log(speChar);


function generatePassword(){

// PASSWORD LENGTH
// prompt user for desired password length 
var userLength = window.prompt("How many characters long would you like your password to be?");
// create conditionals for parameters
  // if user input is < 8, reject
  if (userLength < 8) {
    window.alert("Uh oh! Your password is too short. Please try again.");
    return;
  }
  // if user input is > 128, reject
  if (userLength > 128) {
    window.alert("Uh oh! Your password is too long. Please try again.");
    return;
  }


// LOWERCASE CHARACTERS
// ask user if they want lowercase characters
var userLower = window.confirm("Do you want lowercase characters in your password?");
console.log(userLower);

// UPPERCASE CHARACTERS
// ask user if they want uppercase characters
var userUpper = window.confirm("Do you want UPPERCASE characters in your password?");
console.log(userUpper);

// NUMERIC CHARACTERS
// ask user if they want numeric characters
var userNumeric = window.confirm("Do you want numeric characters in your password?");
console.log(userNumeric);

// SPECIAL CHARACTERS
// ask user if they want special characters
var userSpecial = window.confirm("Do you want special characters in your password?");
console.log(userSpecial);


// if user says ok to lowercase characters, add lowChar array to finalArray 
if (userLower === true) {
  finalArray = finalArray.concat(lowChar);
  console.log(finalArray);
}

// if user says ok to uppercase characters, add uppChar array to finalArray 
if (userUpper === true) {
  finalArray = finalArray.concat(uppChar);
  console.log(finalArray);
}

// if user says ok to numeric characters, add numChar array to finalArray 
if (userNumeric === true) {
  finalArray = finalArray.concat(numChar);
  console.log(finalArray);
}

// if user says ok to special characters, add speChar array to finalArray 
if (userSpecial === true) {
  finalArray = finalArray.concat(speChar);
  console.log(finalArray);
}

// function to randomly generate password (array)
  // var options = Math.floor(Math.random() * array.length)
  // return options

// password varaible set to empty string
  var password = "";

// for loop that generates random characters from finalArray, limited to userLength number
  for (var i = 0; i < userLength; i++) {
    password = password + finalArray[Math.floor(Math.random() * finalArray.length)];
  }
  console.log(password);

// generate password 
return password;
}

// Write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener for the generate button used to generate the password
generateBtn.addEventListener("click", writePassword);
