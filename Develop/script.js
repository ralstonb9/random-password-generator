// Assignment Code
var generateBtn = document.querySelector("#generate");

var value = [];
var characters
var password = "";

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "_", "-"];

function generatePassword() {
  console.log("button clicked");

// 1. prompt user for password criteria
  value = prompt("How many characters do you want in your password?(choose from 8 to 128)");

  if(value < 8 || value > 128) {
    alert("Invalid input, try again.")
    return;
  }

  var upperCase = confirm("Do you want to use uppercase letters in your password?");
  if(upperCase) characters + uppercase;
// a. password length 8-128
// b. uppercase, lowercase, numbers, special characters
// 2. validate the input
// 3. generate password based on criteria
  
// 4. display password on the page
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
