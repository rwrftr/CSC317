let resultString = "";
const opArray = ['.', '+', '-', '*', '%', '/'];
const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const resultTextElement = document.getElementById("resultID"); // make a var for the 'result' text box
console.log(resultTextElement.textContent);

document.addEventListener('keyup', (event) => {
  if(event.key === "Enter"){
    resultString = eval(resultString); 
    setText();
    return;
  }

  if(event.key === "Backspace"){
    resultString = resultString.slice(0,-1)
    setText();
    return;
  }
  
  const newStr = event.key;
  console.log("key pressed: " + event.key + '\n');

  if(opArray.includes(newStr)){
    addChar(' ' + newStr + ' ');
  } 
  
  if(numArray.includes(newStr)){addChar(newStr);}
});

function addChar(newChar) {
  if(checkCompliance(newChar)){
    resultString = resultString + newChar;
    setText();
  }
}

function checkCompliance(newChar){

  if ((newChar.length == 3) && (opArray.includes(resultString.charAt((resultString.length) - 2)))){
    return false;
  } 
  return true;
  
}

function setText() {
  console.log("=== beginning function SetText() ===");
  console.log(" ResultString passed in with type: " + typeof resultString);
  console.log(" ResultString passed in with value: " + resultString + '\n');
  
  if(typeof resultString != 'string'){
    console.log("Since number, attempting to change type...")
    resultString = '' + resultString;
    console.log(" ResultString is of type: " + typeof resultString); 
    console.log(" ResultString contains Value: " + resultString + '\n');
  }

  resultTextElement.textContent = resultString;
  console.log('\n');
}

function clearString() {
  resultString = '';
  setText();
}

function flipPolarity(){
  // if negative, remove the negative sign
  if(resultString.charAt(0) === '-'){
    resultString = resultString.substring(1);
    setText();
    return;
  }
  
  // check if string is an equation
  for (const operator of opArray){
    if((operator != '.') && resultString.includes(operator)){return;} // if the equation has not been evaluated, do not do anything
  }
  
  resultString = eval((resultString * -1));
  setText();
}

function findPercent(){
  for (const operator of opArray){
    if(resultString.includes(operator)){return;} // if string has operators in it, do not eval
    
    resultString = eval(resultString * 0.001);
    setText(); 
  }
}
