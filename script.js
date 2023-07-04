var generateBtn = document.querySelector("#generate");
// going to add a event listener for my button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// im going to be using function and see if it works or not//
function generatePassword() {
  var makePassWordlength = makePassWordlength(14);
  if (!makePassWordlength) return " ";

  var includSpecials = confirm("Include special characters.");
  var includeLowcase = confirm("Include lowcase characters.");
  var includeUppercase = confirm("Include uppercase characters.");
  var includeNumers = confirm("Include numbers.")
  // im going to add a open string for when after the program is ran

  if (!includeNumers && !includeLowcase && !includeUppercase && !includSpecials){
    alert ("You need to choose at least one character type.");
    return " ";
  }

  var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


