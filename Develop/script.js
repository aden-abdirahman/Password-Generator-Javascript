// The Password generator will provide a password with 8-128 characters based on user preferences.
document.querySelector("#generate").addEventListener("click", writePassword);

// Variables
let confirmLength = "";
let confirmUpperCase;
let confirmLowerCase;
let confirmNumericalCharacter;
let confirmSpecialCharacter;

// Arrays 
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// password character length confirmation prompt
function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // alert to show how many characters that password will contain 
      alert(`Your password will have ${confirmLength} characters`);

    // sets parameters of password 
    let confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    let confirmNumericalCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    let confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    let confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericalCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericalCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericalCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string that will be filled based on the loop below selecting random characters from the array.
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}