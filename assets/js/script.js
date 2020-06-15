// Assignment code here
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbols = '!#$%&()*+,-./:;<=>?@[]^_`{|}~\'\"\\';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generatePassword function
var generatePassword = function(){
  // Ask user for password length
  var lengthPrompt = window.prompt("Password length? 8-128 characters");
  lengthPrompt = parseInt(lengthPrompt, 10); // Convert to integer base 10
  if(lengthPrompt === null){
    generatePassword();
  }
  if(lengthPrompt < 8 || lengthPrompt > 128 || isNaN(lengthPrompt)){
    window.alert("Please enter valid length."); //Length error handling
    generatePassword();
  }
  if(lengthPrompt >= 8 && lengthPrompt <= 128){
    var password = "";
    // Include character type prompts
    var lowerPrompt = window.confirm("Include lowercase?");
    var upperPrompt = window.confirm("Include uppercase?");
    var numPrompt = window.confirm("Include numbers?");
    var symPrompt = window.confirm("Include special characters?");
    if(!lowerPrompt && !upperPrompt && !numPrompt && !symPrompt){
      window.alert("You must have at least one character type."); // Type error handling
      lowerPrompt = window.confirm("Include lowercase?");
      upperPrompt = window.confirm("Include uppercase?");
      numPrompt = window.confirm("Include numbers?");
      symPrompt = window.confirm("Include special characters?");
    }
    // String for concatenating char groups 
    var include = '';
    if(lowerPrompt){
      include += lower;
    }
    if(upperPrompt){
      include += upper;
    }
    if(numPrompt){
      include += number;
    }
    if(symPrompt){
      include += symbols;
    }

    // Loop to add characters to password
    for(i = 0; i < lengthPrompt; i++){
      password += include[Math.floor(Math.random() * include.length)];
    }
    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
