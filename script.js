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
  var passwordLeng = makePassWordlength();
  if (!passwordLeng) return " ";

  var includSpecials = confirm("Include special characters.");
  var includeLowcase = confirm("Include lowcase characters.");
  var includeUppercase = confirm("Include uppercase characters.");
  var includeNumers = confirm("Include numbers.")
  // im going to add a open string for when after the program is ran
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


