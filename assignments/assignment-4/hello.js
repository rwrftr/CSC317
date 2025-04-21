const helloText = 'Hello World!';

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
