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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


