// Assignment code here
var characterLength = 8;
var choiceArr = ['!', '@', '#', '$', '%', '&', '*'];


var specialCharArr = ['!', '@', '#', '$', '%', '&', '*'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
var passwordText = document.querySelector("#password");
  passwordText.value = password;  


var password = generatePassword();



function writePassword() {
 
  
}
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}



if (confirm("Would you like lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
}
if (confirm("Would you like uppercase letters in your password?")) {
  choiceArr = choiceArr.concat(upperCaseArr);
}
if (confirm("Would you like special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharArr);
}
if (confirm("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArr);
}
