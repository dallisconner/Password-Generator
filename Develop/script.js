// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "_", "`", "{", "}"];
var passLength = null;
var lowOn = null;
var upOn = null;
var numOn = null;
var specOn = null;
var select = [];
var passGen = [];


function getParams() {
  //Clear previous data
  passLength = null;
  lowOn = null;
  upOn = null;
  numOn = null;
  specOn = null;
  select = [];
  passGen = []

  //Get length
  passLength = prompt("How many characters in length? (Must be between 8 and 128)")
  //Check for valid character length
  if (passLength > 7 && passLength < 129) {
    //Get parameters and add to array
    lowOn = confirm("Use lowercase letters?");
    if (lowOn) { select = select.concat(lowCase); }
    upOn = confirm("Use uppercase letters?");
    if (upOn) { select = select.concat(upCase); }
    numOn = confirm("Use numbers?");
    if (numOn) { select = select.concat(num); }
    specOn = confirm("Use special characters?");
    if (specOn) { select = select.concat(special); }

    //Check for at least one parameter
    if (lowOn == true || upOn == true || numOn == true || specOn == true) {
      console.log(passLength);
      console.log(lowOn);
      console.log(upOn);
      console.log(numOn);
      console.log(specOn);
      console.log(select);
    }
    else {
      alert("Please select at least one category.")
    }
  }
  else {
    alert("Please enter a valid character length.")
  }
}


function generateCharacter() {
  return select[Math.floor(Math.random() * select.length)];
}


function generatePassword() {
  //Get parameters
  getParams();

  //Generate password array
  for (i = 0; i < passLength; i++) {
    passGen.push(generateCharacter());
  }

  //Convert array into single line
  pass = passGen.join("");

  return pass
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
