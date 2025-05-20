const helloText = 'Hello World!';

let paddingElement = document.getElementById('output'); 
let borderElement = document.getElementById('output');
let marginElement = document.getElementById('output');

const paddingSlider = document.getElementById('paddingRange');
const borderSlider = document.getElementById('borderRange');
const marginSlider = document.getElementById('marginRange');

paddingSlider.oninput = function() {
    console.log('paddingSlider changed, value: ' + paddingElement.style.padding);
    paddingElement.style.padding = this.value + 'px';
  }

  borderSlider.oninput = function() {
    console.log('borderSlider changed, value: ' + borderElement.style.border);
    borderElement.style.border = this.value + 'px';
  }

  marginSlider.oninput = function() {
    console.log('marginSlider changed, value: ' + marginElement.style.margin);
    marginElement.style.margin = this.value + 'px';
  }


function printString(num, string){
    let count = 0;
    while(count < num){
        console.log(string);
        count++;
    }
}

const arrowPrint = (num, string) => { 
    if(num <= 1){return string;}
    return (string + ' ' + arrowPrint((num - 1), string));
 };


printString(3, helloText);
console.log();
arrowPrint(4, helloText)
