// let message = age >= 18 ? 'Adult' : 'Minor';

// const city = user.profile?
// const add = (x, y) => x + y;

/*

document.addEventListener("keydown", function(event)) {

function $(id) {
  return document.getElementById(id);
}

}


*/


let resultString = "";

const resultTextElement = document.getElementById("resultID"); // make a var for the 'result' text box
console.log(resultTextElement.textContent);

function addChar(newChar) {
  if (checkCompliance(newChar)){
    resultString = resultString + newChar;
    setText();
  }
}

function checkCompliance(newChar){
  return true; // just for now
}

function setText() {
  resultTextElement.textContent = resultString;
  console.log(resultString);
}

function clearString() {
  resultString = '';
  setText();
}

/*function eval(opString = resultString){
  let firstOperator = opString.indexOf(' ') + 1;
  let secondOperator = opString.substring(firstOperator + 2).indexOf(' ')
  if (firstOperator <= 2) { 
    return 0;
  } 
  
  let firstTerm = resultString.substring(0, firstOperator - 1);
}*/