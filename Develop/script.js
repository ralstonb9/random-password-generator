// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = "";
var password = "";

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*+_-~";

function generatePassword() {
  console.log("button clicked");

// 1. prompt user for password criteria
  var integer = prompt("How many characters do you want in your password?(choose from 8 to 128)");

  if(integer === null) {
    alert("Invalid input, try again.")
    return;
  }

  var length = Number(integer)
  if (typeof length !== "number" || length < 8 || length > 128) {
    alert("Invalid input, try again.")
    return generatePassword();
  }

  var addUppercase = confirm("Do you want to use uppercase letters in your password?");
  if(addUppercase) characters += uppercase;

  var addLowercase = confirm("Do you want to use lowercase letters in your password?");
  if(addLowercase) characters += lowercase;

  var addNumbers = confirm("Do you want to use numbers in your password?");
  if(addNumbers) characters += numbers;

  var addSpecial = confirm("Do you want to use special characters in your password?");
  if(addSpecial) characters += special;

// a. password length 8-128
// b. uppercase, lowercase, numbers, special characters
// 2. validate the input
  if(characters === "") {
    alert("Please select a minimum of one charcter type.")
    return;
  }
// 3. generate password based on criteria
for (let i = 0; i < length; i++) {
  password += characters[Math.floor(Math.random() * characters.length)];
}
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
