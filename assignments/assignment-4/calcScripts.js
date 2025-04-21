let resultString = "";
const resultTextElement = document.getElementById("resultID"); // make a var for the 'result' text box
console.log(resultTextElement.textContent);

document.addEventListener('keyup', (event) => {
  const opArray = ['.', '+', '-', '*', '%'];
  const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  if(event.key === "Enter"){
    resultString = eval(resultString); 
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
  const opArray = ['.', '+', '-', '*', '%'];

  if ((newChar.length == 3) && (opArray.includes(resultString.charAt((resultString.length) - 2)))){
    return false;
  } 
  return true;
  
}

function setText() {
  console.log("=== beginning function SetText() ===");
  console.log(" ResultString passed in with type: " + typeof resultString);
  console.log(" ResultString passed in with value: " + resultString + '\n');
  
  if(typeof resultString === 'number'){
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

